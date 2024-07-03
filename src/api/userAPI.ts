import axios from 'axios';
import { UserData } from '../types/UserData';
export const fetchUserProfile = async (): Promise<UserData> => {
  const response = await axios.get<UserData>('http://localhost:3001/profile');
  return response.data;
};
export const updateUserProfile = async (profile: UserData) => {
  const response = await axios.put('http://localhost:3001/profile', profile); // Adjust the URL based on your API
  return response.data;
};
