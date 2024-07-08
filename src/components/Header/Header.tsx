import userIcon from '../../assets/images/user.svg';
import { Link } from 'react-router-dom';

interface Props {
  userName?: string;
}

const Header = ({ userName = 'Hotsix' }: Props) => {
  return (
    <header className="w-full px-60 py-2 border-b-2 border-skyblue shadow flex justify-between items-center">
      <div className="text-large text-darkblue font-MangoBold">
        <Link to="/">{userName}'s Blog</Link>
      </div>
      <div className="w-92.5 h-15 flex space-x-7 items-center space-x-">
        <button className="w-32.5 h-13.5 text-regular px-1 py-1.5 border-solid border-2 border-darkblue rounded-[15px] text-darkblue font-MangoRegular">
          <Link to="/posts">새 글 작성</Link>
        </button>
        <img src={userIcon} className="w-12 h-12" />
        <button className="text-darkblue text-regular font-MangoRegular">
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
