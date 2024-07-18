import axios from 'axios';

const axiosInstance = axios.create({
  timeout: 10000, // 요청 시간 초과 설정
  withCredentials: true, // 쿠키 사용을 위한 설정 (옵션)
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;
