import React, { useState, useEffect, useCallback } from 'react';
import { fetchPosts, PostData } from '../../api/auth';
import Post from './Post';
import { useInView } from 'react-intersection-observer';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(3);
  const [totalItems, setTotalItems] = useState<number>(15);
  const [pageSize, setPageSize] = useState<number>(6);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = useCallback(async (page: number) => {
    setIsLoading(true);
    try {
      const response = await fetchPosts(page, pageSize, totalItems, totalPages);
      console.log(response);
      const filteredPosts = response.posts.filter(post => post.showStatus); // showStatus가 true인 게시물만 필터링

      setPosts((prevPosts) => [...prevPosts, ...filteredPosts]);

      // pagination 데이터 처리
      setTotalPages(response.pagination.totalPages);
      setTotalItems(response.pagination.totalItems);
      setCurrentPage(response.pagination.currentPage);
      setPageSize(response.pagination.pageSize);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch posts:', err);
      setError('Failed to fetch posts');
    }
    setIsLoading(false);
  }, [pageSize, totalItems, totalPages]);

  useEffect(() => {
    loadPosts(currentPage);
  }, [currentPage, loadPosts]);

  const { ref, inView } = useInView({
    threshold: 0.5, // 화면의 50%가 보일 때 트리거
  });

  useEffect(() => {
    if (inView && !isLoading && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [inView, isLoading, currentPage, totalPages]);

  if (isLoading && posts.length === 0) {
    return <div className="pt-14">로딩중...</div>;
  }

  if (error) {
    return <div className="pt-14">{error}</div>;
  }

  return (
    <div className="pt-14">
      {posts.length > 0 ? (
        posts.map((item) => (
          <div key={item.id} className="mb-8">
            <Post title={item.title} content={item.description} thumbSrc={item.thumb} />
          </div>
        ))
      ) : (
        <p>게시물이 없습니다.</p>
      )}
      <div ref={ref} /> {/* IntersectionObserver를 위한 ref */}
      {isLoading && <p>로딩중...</p>}
    </div>
  );
};

export default PostList;
