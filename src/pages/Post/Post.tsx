// 글 작성

import Header from '../../components/Header/Header';
import Editor from '../../components/Post/Eidtor';
import PrivateButton from '../../components/Post/PrivateButton';

function Post() {
  return (
    <div className="h-full overflow-hidden">
      <Header />
      <div className="flex flex-col items-center">
        <input
          className="font-MangoRegular text-4xl mt-6 mb-2 w-[650px] border-b-2 border-gray focus:outline-none text-g"
          placeholder="제목"
        />
        <Editor />
        <div className="flex flex-row">
          <div className="w-60   h-20 mt-20 border-gray border-2 rounded-sm" />
          <div className="flex flex-col justify-center mt-20">
            <button className="w-28 h-8 ml-6 border-gray border-2 mb-[7px] rounded-sm font-MangoRegular">
              썸네일 업로드
            </button>
            <button className="w-28 h-8 ml-6 border-gray border-2 mt-[7px] rounded-sm font-MangoRegular">
              썸네일 제거
            </button>
          </div>

          <div className="flex flex-col ml-3">
            <PrivateButton />
            <button className="bg-darkblue text-2xl text-white border-2 mt-[7px] rounded-md ml-4 border-darkblue font-MangoRegular">
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
