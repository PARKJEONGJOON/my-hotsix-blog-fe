import React from 'react';

const PostTitle: React.FC<{
  title: string | undefined;
  author: string | undefined;
  updatedAt: string | undefined;
  authorId: string | undefined;
  userId: string | undefined;
}> = ({ title, author, updatedAt, authorId, userId }) => {
  return (
    <div className="flex flex-col w-[620px] border-b border-b-stone-200 pb-3 ">
      <div className="text-4xl font-black font-bold font-black from-neutral-950">
        {'  ' + title}
      </div>
      <div className="flex-row flex justify-between">
        <div className="flex-row flex">
          <div className="text-black font-black">{author}</div>
          <div className="font-light"> · {updatedAt?.slice(0, 10)}</div>
          {authorId === userId ? (
            <div className="rounded-md font-bold text-xs p-1 ml-2 text-white bg-darkblue">
              비공개
            </div>
          ) : (
            <div>
              <div className="ml-[49px]"></div>
            </div>
          )}
        </div>
        <div className="flex-row flex">
          <div className="ml-[10px] text-sm font-thin color-gray hover:font-bold">
            수정
          </div>
          <div className="ml-[10px] text-sm font-thin color-gray hover:font-bold">
            삭제
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTitle;
