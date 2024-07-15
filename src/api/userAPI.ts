import axios from 'axios';
import { NewUserData, UserData } from '../types/UserData';
import { notify } from '../components/Notice/Toast';
export const fetchUserProfile = async (): Promise<UserData> => {
  const response = await axios.get<UserData>('/api/users');
  return response.data;
};
export const updateUserProfile = async (profile: NewUserData) => {
  const response = await axios.patch('/api/users', profile); // Adjust the URL based on your API

  return response.data;
};
export const updateUserName = async (username: NewUserData) => {
  try {
    const response = await axios.patch('/api/users/username', username); // Adjust the URL based on your API
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.log(error.response.data);
        notify({
          type: 'default',
          text: '400 . ' + error.response.data.error,
        });
      } else {
        console.log(error.message);
      }
    }
  }
};
export const postReset = async (email: string) => {
  const response = await axios.post('/api/users/reset', { email: email });
  return response.data;
};
