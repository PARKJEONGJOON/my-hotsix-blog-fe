import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostDetail } from '../../queries/useGetPostDetail';
import ReactQuill from 'react-quill';
import PostTitle from '../../components/Post/PostDetail/PostTitle';
import { usePostDetailStore } from '../../stores/postsStore';
import Like from '../../components/Post/PostDetail/CommentHeader';
import CommentHeader from '../../components/Post/PostDetail/CommentHeader';
import { useGetComments } from '../../queries/useGetComments';
import { CommentData } from '../../types/Comment';
import Comment from '../../components/Post/PostDetail/Comment';
import { useDeletePost } from '../../queries/useDeletePost';

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { postDetail, setPostDetail } = usePostDetailStore();
  const { data: currentPost } = useGetPostDetail(Number(id));
  const { data: comments } = useGetComments(Number(id));

  useEffect(() => {
    if (currentPost) {
      setPostDetail(currentPost);
    }
  }, [currentPost]);

  console.log(currentPost);
  console.log(comments);
  return (
    <div className="flex flex-col items-center mt-[8vh]">
      <PostTitle
        id={currentPost?.id}
        title={currentPost?.title}
        author={currentPost?.author}
        updatedAt={currentPost?.updatedAt}
        showStatus={currentPost?.showStatus}
        likeCount={currentPost?.likeCount}
      />
      <ReactQuill
        className="w-[40vw] mt-4 "
        value={currentPost?.content}
        readOnly={true}
        theme={'bubble'}
      />
      <CommentHeader commentCount={3} likeCount={currentPost?.likeCount} />
      {comments ? (
        comments.length > 0 ? (
          comments
            .slice()
            .reverse()
            .map((coment: CommentData) => <Comment comment={coment} />)
        ) : (
          <div className="text-xl mt-10 font-black"></div>
        )
      ) : (
        <div className="text-xl mt-10 font-black"></div>
      )}
    </div>
  );
};

export default PostDetail;
