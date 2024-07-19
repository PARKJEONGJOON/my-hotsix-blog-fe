import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeletePost } from '../../../queries/useDeletePost';

const PostTitle: React.FC<{
  id: number | undefined;
  title: string | undefined;
  author: string | undefined;
  updatedAt: string | undefined;
  showStatus: boolean | undefined;
  likeCount: number | undefined;
}> = ({ id, title, author, updatedAt, showStatus }) => {
  const { mutate: deletePostMutate } = useDeletePost();
  const navigate = useNavigate();
  const handleDeletePost = () => {
    const confirmed = window.confirm('정말로 게시글을 삭제 하겠습니까?');
    if (confirmed) {
      deletePostMutate(Number(id));
      navigate('/home');
    }
  };
  const handleEditPost = () => {
    navigate(`/postedit/${id}`);
  };
  return (
    <div className="flex flex-col w-[40vw] border-b border-b-stone-200 pb-3 ">
      <div className="text-5xl font-black font-bold  from-neutral-950">
        {'  ' + title}
      </div>
      <div className="flex-row flex justify-between">
        <div className="flex-row flex">
          <div className="text-black font-black">{author}</div>
          <div className="font-light"> · {updatedAt?.slice(0, 10)}</div>
          {!showStatus ? (
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
          <div
            onClick={handleEditPost}
            className="ml-[10px] text-sm font-thin color-gray hover:font-bold"
          >
            수정
          </div>
          <div
            onClick={handleDeletePost}
            className="ml-[10px] text-sm font-thin color-gray hover:font-bold"
          >
            삭제
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTitle;
