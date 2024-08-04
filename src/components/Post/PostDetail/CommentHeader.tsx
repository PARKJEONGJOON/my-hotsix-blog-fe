import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useGetPostLikes } from '../../../queries/useGetPostLikes';
import { useQuery } from '@tanstack/react-query';
import { UserData } from '../../../types/UserData';
import { fetchUserProfile } from '../../../api/userAPI';
import { useAddPostLikes } from '../../../queries/useAddPostLikes';
import { useSubPostLikes } from '../../../queries/useSubPostLikes';
import { useLoginStateStore } from '../../../store';

const CommentHeader: React.FC<{
  commentCount: number;
  likeCount: number;
  userId: number;
  id: number;
}> = ({ commentCount, likeCount, userId, id }) => {
  const { isLoggedIn, setIsLoggedIn } = useLoginStateStore();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const handleAddLikes = () => {
    addLikes();
    setIsLiked(true);
  };
  const handleSubLikes = () => {
    subLikes();
    setIsLiked(false);
  };
  const { mutate: addLikes } = useAddPostLikes(id);
  const { mutate: subLikes } = useSubPostLikes(id);
  const { data: postLikes } = useGetPostLikes(id);
  const { data: userProfile, error } = useQuery<UserData>({
    queryKey: ['getprofile'],
    queryFn: fetchUserProfile,
  });
  useEffect(
    () =>
      postLikes?.likedId.includes(userProfile?.id)
        ? setIsLiked(true)
        : setIsLiked(false),
    [postLikes, userProfile],
  );

  return (
    <div className=" w-[40vw] border-b-2 border-b-stone-200  font-black  text-lg ">
      {isLoggedIn ? (
        <div>
          {isLiked ? (
            <HeartFilled
              onClick={handleSubLikes}
              className="text-2xl font-medium text-sky-200 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
          ) : (
            <HeartOutlined
              onClick={handleAddLikes}
              className="text-2xl  cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
          )}
        </div>
      ) : (
        <div></div>
      )}
      <span className="text-base text-stone-700 font-medium">
        {' '}
        좋아요 {postLikes?.likeCount}개
      </span>
      &nbsp;&nbsp;&nbsp;
      <span className="text-base text-stone-700 font-medium">
        댓글 &nbsp;{commentCount}개
      </span>
    </div>
  );
};

export default CommentHeader;
