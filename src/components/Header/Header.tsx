import defaultProfile from '../../assets/images/defaultProfile.png';
import { Link } from 'react-router-dom';

interface Props {
  // user정보 받아오게 되면 optional 해젠
  userName?: string;
};

const Header = ({ userName = 'Hotsix' }: Props) => {
  return (
    <header className="w-full px-60 py-2 border-b-2 border-skyblue shadow flex justify-between items-center">
      <div className="text-3xl text-darkblue font-MangoBold font-black">
        <Link to="/">{userName}'s Blog</Link>
      </div>
      <div className="w-92.5 h-15 flex space-x-7 items-center space-x-">
        <button className="w-32.5 h-13.5 text-sm px-1 py-1.5 border-solid border-2 border-darkblue rounded-lg text-darkblue font-MangoRegular">
          <Link to="/post">새 글 작성</Link>
        </button>
        <Link to="/profile">
          <img
            src={defaultProfile}
            className="w-8 h-8 cursor-pointer"
            alt="User Icon"
          />
        </Link>
        <button className="text-darkblue text-regular font-MangoRegular text-base">
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
