import axios from 'axios';
import { PostData } from '../types/Post';
import { notify } from '../components/Notice/Toast';

export const getCommnents = async (postId: number) => {
  try {
    const response = await axios.get(`/api/comments/post/${postId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.log(error.response.data.error);
      } else {
        console.log(error.message);
      }
    }
  }
};

export const editPost = async (postData: PostData) => {
  try {
    const response = await axios.post(`/api/posts${postData.id}`, postData);
    notify(response.data.message);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        notify(error.response.data.error);
      } else {
        notify(error.message);
      }
    }
  }
};
