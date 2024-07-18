import emailIcon from '../../assets/images/email.svg';
import gitIcon from '../../assets/images/github.svg';
import defaultProfile from '../../assets/images/defaultProfile.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface UserProps {
  userName: string;
  userEmail: string;
  gitUrl?: string;
  introduce?: string;
  profileImg?: string;
}

const SideUser = () => {
  const [userData, setUserData] = useState<UserProps>({
    userName: '',
    userEmail: '',
    gitUrl: '',
    introduce: '',
    profileImg: '',
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/users')
      .then(response => {
        if (response.data.length > 0) {
          setUserData(response.data[0]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError('사용자 정보를 가져오는 중 오류가 발생했습니다.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-80 flex flex-col items-center pt-16">
      <div className="w-36 h-36 bg-slate-300 rounded-full mb-6">
        <img src={userData.profileImg || defaultProfile} alt="Profile Image" className="w-full h-full object-cover" />
      </div>
      <div className="w-40 flex flex-col">
        <div className="mb-4 space-y-2">
          <p className="text-2xl font-MangoRegular">{userData.userName}</p>
          <div className="flex flex-row items-center">
            <img src={emailIcon} alt="email icon" className="mr-1" />
            <p className="text-l font-MangoRegular">{userData.userEmail}</p>
          </div>
          {userData.gitUrl && (
            <div className="flex flex-row items-center">
              <img src={gitIcon} alt="github icon" className="mr-1" />
              <p className="text-l font-MangoRegular">{userData.gitUrl}</p>
            </div>
          )}
        </div>
        <div className="w-48 h-36 border-solid border-2 border-skyblue rounded-2xl font-MangoRegular text-small p-4">
          {userData.introduce}
        </div>
      </div>
    </div>
  );
};

export default SideUser;
