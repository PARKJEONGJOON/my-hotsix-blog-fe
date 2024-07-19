export interface PostData {
  thumb?: string;
  title?: string;
  description?: string;
  content: string;
  showStatus?: boolean | undefined;
  createdAt?: string;
  updatedAt?: string;
  author?: string;
  id?: number;
}
export interface PostsState {
  posts: PostData[];
  setPosts: (posts: PostData[]) => void;
}
