import { AxiosError } from 'axios';
import defaultProfile from '../../assets/images/defaultProfile.png';
import { ChangeEvent, RefObject, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchUserProfile, updateUserProfile } from '../../api/userAPI';
import { UserData } from '../../types/UserData';
import EditableInputField from '../../components/Profile/EditTableInput';
import DisplayField from '../../components/Profile/DisplayField';
import Header from '../../components/Header/Header';

interface EditToggle {
  userName: boolean;
  email: boolean;
  gitUrl: boolean;
  introduce: boolean;
}

function Profile() {
  const userNameRef = useRef<HTMLInputElement>(null);

  const gitUrlRef = useRef<HTMLInputElement>(null);
  const introduceRef = useRef<HTMLTextAreaElement>(null);

  const queryClient = useQueryClient();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [editToggle, setEditToggle] = useState<EditToggle>({
    userName: false,
    email: false,
    gitUrl: false,
    introduce: false,
  });
  const [userData, setUserData] = useState<UserData>({
    userId: '',
    password: '',
    userName: '',
    profileImg: '',
    gitUrl: undefined,
    introduce: undefined,
  });

  const { data, error } = useQuery<UserData, AxiosError>({
    queryKey: ['getprofile'],
    queryFn: fetchUserProfile,
  });

  const { mutate } = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getprofile'] });
    },
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setProfileImage(null);
  };

  const handleIntroduceChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserData({
      ...userData,
      introduce: e.target.value,
    });
  };

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      userName: e.target.value,
    });
  };

  const handleGitUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      gitUrl: e.target.value,
    });
  };

  const handleEditToggle = (
    key: keyof EditToggle,
    ref: RefObject<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEditToggle((prev) => {
      const newState = {
        ...prev,
        [key]: !prev[key],
      };
      return newState;
    });

    setTimeout(() => {
      if (ref.current) {
        ref.current.focus();
      }
    }, 0);
  };

  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);

  if (error) {
    return <div className="">Error: {error.message}</div>;
  }

  return (
    <>
    <Header />
      <Container>
        <ProfileSection>
          <ProfileColumn>
            <ProfileImage src={profileImage || defaultProfile} />
            <ImageUploadButton>
              <label htmlFor="fileInput">이미지 업로드</label>
              <FileInput
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </ImageUploadButton>
            <ImageDeleteButton onClick={handleImageDelete}>
              이미지 제거
            </ImageDeleteButton>
          </ProfileColumn>
          <IntroduceColumn>
            <IntroduceHeader>
              <IntroduceHeaderText>한 줄 소개</IntroduceHeaderText>
              {editToggle.introduce ? (
                <SaveButton
                  onClick={() => {
                    handleEditToggle('introduce', introduceRef);
                    mutate(userData);
                  }}
                >
                  저장
                </SaveButton>
              ) : (
                <IntroduceEditButton
                  onClick={() => handleEditToggle('introduce', introduceRef)}
                >
                  수정
                </IntroduceEditButton>
              )}
            </IntroduceHeader>
            {editToggle.introduce ? (
              <EditIntroduceBox>
                <IntroduceTextarea
                  ref={introduceRef}
                  id="introduceTextArea"
                  value={userData.introduce}
                  onChange={handleIntroduceChange}
                  placeholder="한줄 소개 입력"
                />
              </EditIntroduceBox>
            ) : (
              <IntroduceBox>{userData.introduce}</IntroduceBox>
            )}
            <PasswordEditButton to="/passwordedit">
              비밀번호 변경하러 가기
            </PasswordEditButton>
          </IntroduceColumn>
        </ProfileSection>
        <EditSectionsContainer>
          <EditSection>
            <Label htmlFor="userNameInput">닉네임 변경</Label>
            {editToggle.userName ? (
              <EditableInputField
                inputRef={userNameRef}
                value={userData.userName}
                onChange={handleUserNameChange}
                onSave={() => {
                  handleEditToggle('userName', userNameRef);
                  mutate(userData);
                }}
                placeholder="수정할 닉네임"
              />
            ) : (
              <DisplayField
                value={userData.userName}
                onEdit={() => handleEditToggle('userName', userNameRef)}
              />
            )}
          </EditSection>

          <EditSection>
            <Label htmlFor="gitUrlInput">Github URL 변경</Label>
            {editToggle.gitUrl ? (
              <EditableInputField
                inputRef={gitUrlRef}
                value={userData.gitUrl}
                onChange={handleGitUrlChange}
                onSave={() => {
                  handleEditToggle('gitUrl', gitUrlRef);
                  mutate(userData);
                }}
                placeholder="수정할 Github URL"
              />
            ) : (
              <DisplayField
                value={userData.gitUrl}
                onEdit={() => handleEditToggle('gitUrl', gitUrlRef)}
              />
            )}
          </EditSection>
          <EditSection>
            <Label>회원탈퇴</Label>
            <EditSection>
              <UserDeleteButton>회원 탈퇴</UserDeleteButton>
            </EditSection>
          </EditSection>
        </EditSectionsContainer>
      </Container>
    </>
  );
}

export default Profile;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  background-color: #ffffff;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;
`;

const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6px;
  padding-right: 0px;
  margin-right: 0px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #83bcff;

  background: #ffffff;
`;

const FileInput = styled.input`
  display: none;
`;

const IntroduceColumn = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0px;
  margin-left: 30px;
`;

const EditSectionsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
const EditSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  width: 104px;
  height: 21px;
  font-family: 'MangoDdobak';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  margin-right: 20px;
  color: #001354;
`;
const IntroduceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const IntroduceHeaderText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-family: 'MangoDdobak';
  font-size: 13px;
  line-height: 20px;
  color: #001354;
`;
const IntroduceBox = styled.div`
  padding: 10px;
  font-style: normal;
  font-weight: 400;
  font-family: 'MangoDdobak';
  font-size: 14px;
  line-height: 20px;
  box-sizing: border-box;
  width: 400px;
  height: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
  background: #ffffff;
  border: 2px solid #83bcff;
  border-radius: 20px;
`;
const EditIntroduceBox = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 20px;
`;
const IntroduceTextarea = styled.textarea`
  width: 380px;
  height: 80px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 10px;
  font-family: 'MangoDdobak';
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  overflow: hidden;
  resize: none;
  color: #000000;
  &:focus {
    outline: none;
  }
`;

const ImageUploadButton = styled.button`
  margin-top: 10px;
  font-style: normal;
  font-family: 'MangoDdobak';
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #001354;
  box-sizing: border-box;
  width: 100px;
  height: 30px;
  background: #ffffff;
  border: 2px solid #83bcff;
  border-radius: 10px;
  &:hover {
    background-color: #f0f0f0;
  }
  &:active {
    transform: translateY(1px);
  }
`;
const ImageDeleteButton = styled.button`
  margin-top: 14px;
  width: 121px;
  height: 21px;
  font-style: normal;
  font-weight: 400;
  font-family: 'MangoDdobak';
  font-size: 13px;
  line-height: 20px;
  color: #555555;
  width: 100px;
  height: 30px;
  background: #ffffff;
  border-width: 0;
  &:hover {
    background-color: #f0f0f0;
  }
  &:active {
    transform: translateY(1px);
  }
`;
const IntroduceEditButton = styled.button`
  width: 50px;
  height: 30px;
  background: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-family: 'MangoDdobak';
  font-size: 13px;
  line-height: 20px;
  color: #001354;
  border-width: 0px;
  text-decoration: underline;
  background-color: #ffffff;
  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    transform: translateY(1px);
  }
`;
const PasswordEditButton = styled(Link)`
  box-sizing: border-box;
  width: 400px;
  height: 30px;
  background: #ffffff;
  border: 2px solid #9cb0c6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-family: 'MangoDdobak';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  text-decoration: none;
  &:hover {
    background-color: #f0f0f0;
  }
  &:active {
    transform: translateY(1px);
  }
  color: #001354;
`;
const EditButton = styled.button`
  box-sizing: border-box;
  width: 50px;
  height: 30px;
  background: #001354;
  border: 1px solid #ffffff;
  border-radius: 5px;
  font-family: 'MangoDdobak';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
  margin-left: 45px;
`;

const SaveButton = styled.button`
  box-sizing: border-box;

  width: 50px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #001354;
  border-radius: 5px;
  margin-left: 45px;
  font-family: 'MangoDdobak';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  color: #001354;
`;
const UserDeleteButton = styled.button`
  box-sizing: border-box;

  width: 70px;
  height: 30px;
  background: #f18686;

  border-radius: 5px;

  font-family: 'MangoDdobak';
  font-style: normal;
  font-weight: 100;
  font-size: 13px;
  line-height: 20px;

  color: #ffffff;
`;
