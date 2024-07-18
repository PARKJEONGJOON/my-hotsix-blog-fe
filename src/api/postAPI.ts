import axios from 'axios';
import { PostData } from '../types/Post';
import { notify } from '../components/Notice/Toast';

export const registerPost = async (postData: PostData) => {
  try {
    const response = await axios.post('/api/posts', postData);
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
