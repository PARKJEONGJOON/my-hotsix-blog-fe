import axios from 'axios';
import { PostData } from '../types/Post';
import { notify } from '../components/Notice/Toast';

export const registerPost = async (postData: PostData) => {
  try {
    const response = await axios.post('/api/posts', postData);
    // notify(response.data.message);
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
export const editPost = async (postData: PostData) => {
  try {
    const response = await axios.patch(`/api/posts/${postData.id}`, postData);
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

export const getPostDetail = async (postId: number) => {
  try {
    const response = await axios.get(`/api/posts/${postId}`, {
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
export const getPosts = async ({ pageParam = 1 }) => {
  try {
    const response = await axios.get(`/api/posts?page=${pageParam}`, {
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
export const getMyPosts = async ({ pageParam = 1 }) => {
  try {
    const response = await axios.get(`/api/posts/user/id=2?page=${pageParam}`, {
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
export const deletePost = async (postId: number) => {
  try {
    const response = await axios.delete(`/api/posts/${postId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    notify(response.data.message);
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
