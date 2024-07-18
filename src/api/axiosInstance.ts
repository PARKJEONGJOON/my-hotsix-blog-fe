import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://223.130.154.175:3000/api', // JSON Server가 동작 중인 주소
  timeout: 10000, // 요청 시간 초과 설정
  withCredentials: true, // 쿠키 사용을 위한 설정 (옵션)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
