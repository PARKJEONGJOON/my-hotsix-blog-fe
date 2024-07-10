import emailIcon from '../../assets/images/email.svg';
import gitIcon from '../../assets/images/github.svg';

interface UserProps {
  userName?: string;
  userEmail?: string;
  gitUrl?: string;
  intro?: string;
}

const SideUser = ({
  userName = '사용자이름',
  userEmail = 'user@email.com',
  gitUrl = 'usergit@github.com',
  intro = '한 줄 소개 자리',
}: UserProps) => {
  return (
    <div className="w-80 flex flex-col items-center pt-16">
      <div className="w-48 h-48 bg-slate-300 rounded-full border-solid border-2 border-skyblue mb-6" />
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
          {intro}
        </div>
      </div>
    </div>
  );
};

export default SideUser;
