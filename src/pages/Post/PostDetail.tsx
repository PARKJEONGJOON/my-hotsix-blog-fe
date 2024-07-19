import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPosts } from '../../queries/useGetPosts';
import { usePostsStore } from '../../stores/postsStore';
import ReactQuill from 'react-quill';
import PostTitle from '../../components/Post/PostDetail/PostTitle';

const PostDetail = () => {
  const { posts, setPosts } = usePostsStore();
  const { data } = useGetPosts();
  //메인페이지에서 post 전역상태 처리해야함
  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  const { id } = useParams<{ id: string }>();
  const currentPost = posts.find((p) => p.id === Number(id));
  console.log(data);
  return (
    <div className="flex flex-col items-center mt-[8vh]">
      <PostTitle
        title={currentPost?.title}
        author={currentPost?.author}
        updatedAt={currentPost?.updatedAt}
        userId="3"
        authorId="3"
      />
      <ReactQuill
        className="w-[650px] mt-4 "
        value={
          '<h1>wefewefefef<img src="https://firebasestorage.googleapis.com/v0/b/hotsix-blog-5f9b1.appspot.com/o/image%2F1721307289566?alt=media&amp;token=d8ae956e-0037-4712-b4fa-475d55981d42" width="421" height="70.40614334470989" style="cursor: nwse-resize;"></h1><p class="ql-align-center">유효성 검사 할거 개많은듯</p><p><br></p><h1>잘 되려나</h1><p><br></p><p><img src="https://firebasestorage.googleapis.com/v0/b/hotsix-blog-5f9b1.appspot.com/o/image%2F1721223873650?alt=media&amp;token=e7bef1f0-af29-4f5b-8522-efaab9126565" width="233" height="198.94615384615383" style="float: right;"></p><p>ㅁㄴㅇㅁㄴㅇㅁ</p><p>!!!</p><p><br></p><p>ㄴㅁㅇ</p><p>ㄻㄴㄻㄴㄹㅁㄴㅇㅁㄴㅇㅇ</p><p>ㅁㄴㅇㄹㄴ</p><p>ㄴㅁㅇㄻㄴㅇㄹ<img src="https://firebasestorage.googleapis.com/v0/b/hotsix-blog-5f9b1.appspot.com/o/image%2F1721221276605?alt=media&amp;token=192ca9f4-508b-40c9-b93a-2abbbb7d8c75" height="277.5" width="325">ㅁㄴㅁㄴㅇㅁㄴㅇㅁㄴㅇ</p>'
        }
        readOnly={true}
        theme={'bubble'}
      />

      <div className=" w-[650px] border-b-2 border-b-stone-200 pb-3 font-black">
        댓글 <span className="font-black text-darkblue">3</span>
      </div>
      <div>asdassadadadasd</div>
      <div>asdassadadadasd</div>
      <div>asdassadadadasd</div>
      <div>asdassadadadasd</div>
      <div>asdassadadadasd</div>
    </div>
  );
};

export default PostDetail;
