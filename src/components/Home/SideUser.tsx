import emailIcon from '../../assets/images/email.svg';
import gitIcon from '../../assets/images/github.svg';
import defaultImage from '../../assets/images/defaultProfile.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface UserProps {
  userName: string;
  userEmail: string;
  gitUrl?: string;
  introduce?: string;
  profileImage?: string | null;
}

const SideUser = ({
  userName = '사용자이름',
  userEmail = 'user@email.com',
  gitUrl = 'usergit@github.com',
  introduce = '한 줄 소개 자리',
  profileImage,
}: UserProps) => {
  return (
    <div className="w-80 flex flex-col items-center pt-16">
      <div className="w-48 h-48 bg-slate-300 rounded-full border-solid border-2 border-skyblue mb-6">
        <img
          src={profileImage || defaultImage}
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="w-40 flex flex-col items-start ">
        <div className="mb-4 space-y-2">
          <p className="text-2xl font-MangoRegular">{userName}</p>
          <div className="flex flex-row items-center">
            <img src={emailIcon} alt="email icon" className="mr-1" />
            <p className="text-xl font-MangoRegular">{userEmail}</p>
          </div>
          <div className="flex flex-row items-center">
            <img src={gitIcon} alt="github icon" className="mr-1" />
            <p className="text-xl font-MangoRegular">{gitUrl}</p>
          </div>
        </div>
        <div className="w-52 h-40 border-solid border-2 border-skyblue rounded-2xl font-MangoRegular text-small p-4">
          {introduce}
        </div>
      </div>
    </div>
  );
};

export const UserContainer = () => {
  const [userData, setUserData] = useState<UserProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUserData(response.data.users[0]);
      } catch (err) {
        setError('유저 정보 가져오기 실패');
      }
    };

    fetchUserData();
  }, []);

  if (error) return <div>{error}</div>;

  return userData ? <SideUser {...userData} /> : null;
};

export default SideUser;
