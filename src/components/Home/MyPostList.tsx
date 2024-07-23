import React, { useState, useEffect, useCallback } from 'react';
import { fetchPosts, PostData } from '../../api/auth';
import Post from './Post';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getMyPosts, getPosts } from '../../api/postAPI';
import { Link } from 'react-router-dom';
import { UserData } from '../../types/UserData';
import { fetchUserProfile } from '../../api/userAPI';
import defaultProfile from '../../assets/images/defaultProfile.png';
const MyPostList: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(3);
  const [totalItems, setTotalItems] = useState<number>(15);
  const [pageSize, setPageSize] = useState<number>(6);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);
  const { data: userData } = useQuery<UserData>({
    queryKey: ['getprofile'],
    queryFn: fetchUserProfile,
  });
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['infinitePosts'],
    queryFn: getMyPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return pages.length < lastPage.pagination.totalPages
        ? pages.length + 1
        : undefined;
    },
  });
  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="flex flex-row  my-16">
        <h1 className="flex justify-center text-5xl font-black items-center">
          {userData?.userName}의 블로그
        </h1>
      </div>
      {data.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.posts.map((post: any) => (
            <div key={post.id} className="my-4">
              <Link to={`/posts/${post.id}`}>
                <Post
                  title={post.title}
                  content={post.description}
                  thumbSrc={post.thumb}
                  likeCount={post.likeCount}
                  showStatus={post.showStatus}
                />
              </Link>
            </div>
          ))}
        </React.Fragment>
      ))}
      <div>
        {isFetchingNextPage && <div>Loading more...</div>}
        {!hasNextPage && (
          <div className="flex justify-center">No more posts...</div>
        )}
      </div>
    </div>
  );
};

export default MyPostList;
