import axiosInstance from './axiosInstance';

export interface LoginData {
  userId: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  github?: string;
  introduce?: string;
}

export const login = async (data: LoginData) => {
  const response = await axiosInstance.post('/users/login', data);
  return response.data;
};

export const register = async (data: RegisterData) => {
  const response = await axiosInstance.post('/users', data);
  return response.data;
};

export const logout = async () => {
  try {
    await axiosInstance.post('/users/logout');
    return true;
  } catch (error) {
    console.log('로그아웃 실패', error);
    return false;
  }
};
