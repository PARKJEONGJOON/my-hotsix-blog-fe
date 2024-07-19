import { useQuery } from '@tanstack/react-query';
import { getCommnents } from '../api/commentAPI';

export const useGetComments = (postId: number) => {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: () => getCommnents(postId),
  });
};
