import search from '../../assets/images/search.png';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import defaultProfile from '../../assets/images/defaultProfile.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserData } from '../../types/UserData';
import { fetchUserProfile, logOut } from '../../api/userAPI';

interface Props {
  // user정보 받아오게 되면 optional 해젠
  userName?: string;
}

const handleLogout = () => {
  localStorage.removeItem('auth-cookie');
};

const Header = ({ userName = 'Hotsix' }: Props) => {
  const queryClient = useQueryClient();
  const { data: userData, error } = useQuery<UserData>({
    queryKey: ['getprofile'],
    queryFn: fetchUserProfile,
  });
  const profileImageUrl = userData?.profileImg || defaultProfile;
  userName = userData?.userName || 'Hotsix';
  const navigate = useNavigate();
  const { mutate: logoutMutate } = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getprofile'] });
      navigate('/login');
    },
  });

  return (
    <header className="w-full py-4 border-b-2 border-skyblue shadow flex justify-center items-center whitespace-nowrap">
      <div className="text-3xl text-darkblue bold mr-72">
        <Link to="/">{userName}'s Blog</Link>
      </div>

      <div className="w-120 h-15 pl-20 flex space-x-4 items-center ml-72">
        <Link to="/search">
          <img src={search} className="w-9 h-9" />
        </Link>

        <button className="w-24 h-11 text-small px-1 py-1.5 border-solid border-2 border-darkblue rounded-[15px] text-darkblue font-MangoRegular">
          <Link to="/">내 블로그</Link>
        </button>

        <button className="w-24 h-11 text-small px-1 py-1.5 border-solid border-2 border-darkblue rounded-[15px] text-darkblue font-MangoRegular">
          <Link to="/post">새 글 작성</Link>
        </button>

        <Link to="/profile">
          <img
            src={profileImageUrl}
            className="w-8 h-8 cursor-pointer rounded-full"
            alt="User Icon"
          />
        </Link>
        <button
          className="text-darkblue text-regular font-MangoRegular text-sm"
          onClick={() => logoutMutate()}
        >
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
