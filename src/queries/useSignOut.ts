import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signout } from '../api/userAPI';
import { notify } from '../components/Notice/Toast';

export const useSignOut = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signout,
    onSuccess: (data) => {
      if (data) {
        notify('회원 탈퇴 되었습니다.');
        queryClient.invalidateQueries({ queryKey: ['infinitePosts'] });
      }
    },
  });
};
