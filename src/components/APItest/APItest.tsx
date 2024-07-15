import React from 'react';
import { login } from '../../api/auth';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

const APItest = () => {
  const handleLogin = async () => {
    try {
      const response = await axios.post<{ message: string; userId: number }>(
        '/api/users/login',
        {
          userId: 'jeongp616@naver.com',
          password: '12341234',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(response.data); // 로그인 성공 시 서버에서 반환한 데이터 확인
      // 여기서 필요한 로그인 성공 처리를 추가할 수 있습니다.
    } catch (error: any) {
      // AxiosError 타입 적용
      if (error.response) {
        console.error('로그인 실패:', error.response.data); // 로그인 실패 시 서버에서 반환한 에러 메시지 출력
        // 여기서 필요한 로그인 실패 처리를 추가할 수 있습니다.
      } else {
        console.error('네트워크 오류:', error.message); // 네트워크 오류 처리
      }
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>로그인 버튼</button>
    </div>
  );
};

export default APItest;
