import userIcon from '../../assets/images/user.svg';
import search from '../../assets/images/search.png';
import { Link } from 'react-router-dom';

interface Props {
  // user정보 받아오게 되면 optional 해젠
  userName?: string;
};

const Header = ({ userName = 'Hotsix' }: Props) => {
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
          <img src={userIcon} className="w-9 h-9" />
        </Link>
        
        <button className="text-darkblue text-small font-MangoRegular">
          <Link to="/login">로그아웃</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;