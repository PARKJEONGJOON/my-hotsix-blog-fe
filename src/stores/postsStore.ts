import { create } from 'zustand';
import { PostData } from '../types/Post';

interface PostsState {
  posts: PostData[];
  setPosts: (posts: PostData[]) => void;
}
export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));
