import { TiHeartOutline } from 'react-icons/ti';

interface PostProps {
  title: string;
  content: string;
  thumbSrc?: string;
  likeCount?: number;
  showStatus?: boolean;
}

const Post = ({
  title,
  content,
  thumbSrc,
  likeCount,
  showStatus,
}: PostProps) => {
  return (
    <div className="w-postWidth h-postHeight border-solid border-2 border-gray rounded-2xl flex flex-row px-8 py-4 space-x-12">
      <div className="w-postInnerWidth">
        <div className="flex flex-row items-center justify-between">
          <p className="text-regular font-MangoBold mb-2 text-ellipsis overflow-hidden line-clamp-1">
            {title}
          </p>
          <div>
            <div className="flex flex-row">
              <TiHeartOutline className="w-6 h-6" />
              <p className="text-small ml-1">{likeCount}</p>
            </div>
            {showStatus ? <div>비공개</div> : <></>}
          </div>
        </div>
        <p className="text-small font-MangoRegular text-ellipsis overflow-hidden line-clamp-3">
          {content}
        </p>
      </div>
      {thumbSrc ? (
        <img
          src={thumbSrc}
          alt="썸네일 이미지(있으면 보여주기)"
          className="w-32 h-32 rounded-md"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Post;
