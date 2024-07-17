import { create } from 'zustand';
import { PostData } from './types/Post';

interface StoreType {
  postData: PostData;
  setPostData: (data: Partial<PostData>) => void;
}
export const usePostStore = create<StoreType>((set) => ({
  postData: {
    thumb: '',
    title: '',
    description: '',
    content: '',
    showStatus: undefined,
  },
  setPostData: (data: Partial<PostData>) =>
    set((state) => ({
      postData: {
        ...state.postData,
        ...data,
      },
    })),
}));
