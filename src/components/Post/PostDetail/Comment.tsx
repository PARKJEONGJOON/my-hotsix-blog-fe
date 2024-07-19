import React from 'react';
import { CommentData } from '../../../types/Comment';
import defaultProfile from '../../../assets/images/defaultProfile.png';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
const Comment: React.FC<{
  comment: CommentData;
}> = ({ comment }) => {
  return (
    <div className="flex justify-between w-[38vw] my-4">
      <div className="flex ">
        <img
          className="w-[55px] h-[55px] rounded-full border-[1px] "
          src={defaultProfile}
        />
        <div className="flex flex-col ml-3">
          <div className="text-lg font-black">박정준</div>
          <div className="text-xs">{comment.updatedAt.slice(0, 10)}</div>
        </div>
      </div>

      <div className="w-[20vw] h-20  text-base overflow-auto break-words">
        {comment.content}
      </div>
      <div className="flex flex-col text-sm ">
        <div className="text-sm font-normal cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
          <FormOutlined className="text-2xl " />
          수정
        </div>
        <div className=" text-sm font-normal cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
          <DeleteOutlined className="text-2xl " />
          삭제
        </div>
      </div>
    </div>
  );
};

export default Comment;
