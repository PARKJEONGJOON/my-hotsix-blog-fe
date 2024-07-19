import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const CommentHeader: React.FC<{
  commentCount: number;
  likeCount: number;
}> = ({ commentCount, likeCount }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const handleAddLikes = () => {
    setIsLiked(true);
  };
  const handleSubLikes = () => {
    setIsLiked(false);
  };

  return (
    <div className=" w-[40vw] border-b-2 border-b-stone-200 pb-1 font-black  text-lg ">
      <div>
        {isLiked ? (
          <HeartFilled
            onClick={handleSubLikes}
            className="text-3xl text-sky-200 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          />
        ) : (
          <HeartOutlined
            onClick={handleAddLikes}
            className="text-3xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          />
        )}
      </div>
      <span> 좋아요 {likeCount}개</span>&nbsp;&nbsp;&nbsp;댓글
      <span className="font-black text-darkblue">{commentCount}</span>
    </div>
  );
};

export default CommentHeader;
