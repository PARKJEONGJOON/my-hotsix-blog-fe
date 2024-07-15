import axios from 'axios';
import { UserData } from '../types/UserData';
export const fetchUserProfile = async (): Promise<UserData> => {
  const response = await axios.get<UserData>('/api/users');
  return response.data;
};
export const updateUserProfile = async (profile: UserData) => {
  const response = await axios.patch('/api/users', profile); // Adjust the URL based on your API

  return response.data;
};
export const postReset = async (email: string) => {
  const response = await axios.post('/api/users/reset', { email: email });
  return response.data;
};
