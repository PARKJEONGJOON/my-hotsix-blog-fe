import defaultThumb from '../../assets/images/defaultThumb.jpg';
import { ChangeEvent, useState } from 'react';
import Header from '../../components/Header/Header';
import Editor from '../../components/Post/Eidtor';
import PrivateButton from '../../components/Post/PrivateButton';
import { uploadImageToFirebase } from '../../Firebase';
import { PostData } from '../../types/Post';
import { usePostStore } from '../../store';
import { extractTextFromHTML } from '../../utils/extractTextFromHtml';
import { useMutation } from '@tanstack/react-query';
import { registerPost } from '../../api/postAPI';
import { notify } from '../../components/Notice/Toast';
import { useNavigate, useNavigation } from 'react-router-dom';

function Post() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const { postData, setPostData } = usePostStore();
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadImage(file);
      e.target.value = '';
    }
  };

  const { mutate: registerPostMutate } = useMutation({
    mutationFn: registerPost,
  });

  const uploadImage = async (file: File) => {
    try {
      const url = await uploadImageToFirebase(file);
      setPostData({ ...postData, thumb: url });
      console.log(postData);
    } catch (error) {
      console.error('Error uploa)ding image:', error);
    }
  };
  const handleImageDelete = () => {
    setPostData({ ...postData, thumb: '' });
  };
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setPostData({ ...postData, title: newTitle });
  };
  const handleRegister = () => {
    // 필요한 데이터를 포함하여 mutate 함수 호출
    if (postData.content) {
      setPostData({
        ...postData,
        description: extractTextFromHTML(postData.content),
      });
    }
    if (postData.showStatus == undefined) {
      notify('공개/비공개 선택이 필요합니다.');
    } else {
      registerPostMutate(postData);
    }
  };

  return (
    <div>
      <Header />
      <div className=" flex justify-center">
        <div className="flex flex-col items-center justify-center">
          <input
            className="text-xl mt-3 mb-2 w-[620px] border-b-2 border-gray focus:outline-none text-g"
            placeholder="제목"
            onChange={handleTitleChange}
          />
          <Editor />
          <div className="flex flex-row">
            <img
              src={postData.thumb || defaultThumb}
              className="flex flex-col w-60 h-16 mt-14 border-gray border-2 rounded-sm"
            />
            <div className="flex flex-col  mt-14">
              <button className="w-28 h-6 ml-6 border-gray border-2 mb-[7px] rounded-sm font-MangoRegular  text-sm m hover:bg-slate-50 transition-colors">
                <label htmlFor="fileInput">이미지 업로드</label>
                <input
                  id="fileInput"
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
              </button>
              <button
                onClick={handleImageDelete}
                className="w-28 h-6 ml-6 border-gray border-2 mt-[7px] rounded-sm font-MangoRegular text-sm hover:bg-slate-50 transition-colors"
              >
                썸네일 제거
              </button>
            </div>

            <div className="flex flex-col ml-2 mt-14">
              <PrivateButton />
              <button
                onClick={handleRegister}
                className="bg-darkblue text-xl text-white border-2 mt-[0px] rounded-md ml-4 border-darkblue font-MangoRegular  hover:bg-blue-900"
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
function setUserData(arg0: { profileImg: string }) {
  throw new Error('Function not implemented.');
}

function profileImgMutate(arg0: { newProfileImg: string }) {
  throw new Error('Function not implemented.');
}
