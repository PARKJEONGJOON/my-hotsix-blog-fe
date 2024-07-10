import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postReset } from '../api/userAPI';

export const useUserQueries = () => {
  const queryClient = useQueryClient();
  const { mutate: sendEmail } = useMutation({
    mutationFn: postReset,
  });
};
