import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPosts } from '../api/postAPI';
import { usePostsStore } from '../stores/postsStore';

export const useGetPosts = () => {
  return useQuery({ queryKey: ['getposts'], queryFn: getPosts });
};
