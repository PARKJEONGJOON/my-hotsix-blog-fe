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
        notify(error.response.data.error);
      } else {
        console.log(error.message);
      }
    }
  }
};
export const updateProfileImg = async (profileImg: NewUserData) => {
  try {
    const response = await axios.patch('/api/users', profileImg); // Adjust the URL based on your API
    notify('이미지 수정 중');
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
export const logOut = async () => {
  try {
    const response = await axios.post('/api/users/logout'); // Adjust the URL based on your API
    console.log(response);
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
export const signout = async () => {
  try {
    const response = await axios.delete('/api/users');
    console.log(response.data);
    alert('회원 탈퇴가 완료되었습니다.');
  } catch (error) {
    console.error('회원 탈퇴 오류:', error);
    alert('회원 탈퇴 중 오류가 발생했습니다. 다시 시도해 주세요.');
  }
};
export const postReset = async (email: string) => {
  const response = await axios.post('/api/users/reset', { email: email });
  return response.data;
};
