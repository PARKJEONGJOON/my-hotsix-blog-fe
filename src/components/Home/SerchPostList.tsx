import React, { useState, useEffect, useCallback } from 'react';
import { fetchPosts, PostData } from '../../api/auth';
import Post from './Post';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getMyPosts, getPosts, getSerchPosts } from '../../api/postAPI';
import { Link, useParams } from 'react-router-dom';
import { UserData } from '../../types/UserData';
import { fetchUserProfile, getUserProfile } from '../../api/userAPI';
import defaultProfile from '../../assets/images/defaultProfile.png';
const SerchPostList: React.FC = () => {
  const { keyword } = useParams<{ keyword: string }>();

  const fetchPosts = ({ pageParam = 1 }) => {
    return getSerchPosts({ keyword: keyword, pageParam }); // userId는 실제 값으로 설정
  };
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['infinitePosts', keyword],
    queryFn: fetchPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return pages.length < lastPage.pagination.totalPages
        ? pages.length + 1
        : undefined;
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isFetchingNextPage
      ) {
        return;
      }
      if (hasNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);
  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  }
  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex flex-row  justify-center align-center">
        <h1 className="flex  text-3xl font-medium text-stone-700 text-center">
          {keyword} 검색 결과
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
                  id={post.id}
                  commentCount={post.commentCount}
                />
              </Link>
            </div>
          ))}
        </React.Fragment>
      ))}
      <div>
        {isFetchingNextPage && <div>Loading more...</div>}
        {!hasNextPage && (
          <div className="w-postWidth h-postHeight  flex justify-center">
            No more posts...
          </div>
        )}
      </div>
    </div>
  );
};

export default SerchPostList;
