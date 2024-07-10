import React from 'react';
import '../../index.css';
import ButtonComponent from '../../components/Login/LoginButton';
import LoginInputForm from '../../components/Login/LoginInputForm';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';

const validateNotEmpty = (value: string) => {
  if (value.trim() === '') {
    return '아이디/비밀번호를 입력해주세요.';
  }
  return undefined;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  // const loginIdInput = useInput({ initialValue: '', validationFn: validateNotEmpty });
  // const passwordInput = useInput({ initialValue: '', validationFn: validateNotEmpty });

  const handleLogin = () => {
    navigate('/home');

    // loginIdInput.validate();
    // passwordInput.validate();

    // if (!loginIdInput.error && !passwordInput.error) {
    //   login(
    //     { loginId: loginIdInput.value, password: passwordInput.value },
    //     {
    //       onSuccess: () => {
    //         navigate('/home');
    //       },
    //       onError: () => {
    //         alert('로그인에 실패하였습니다.');
    //       }
    //     }
    //   )
    // }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen my-4">
      <div className="text-darkblue text-center mb-4">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <h1 className="text-lg">안녕하세요!</h1>
        <h1 className="text-lg">
          블로그 이용을 위해 로그인/회원가입을 해주세요 :)
        </h1>
      </div>

      <div className="flex flex-col gap-2 border-2 border-skyblue rounded-3xl p-10">
        <div className="flex flex-col gap-5">
          <LoginInputForm
            type="text"
            id="ID"
            placeholder="아이디를 입력해주세요"
          />
          <LoginInputForm
            type="password"
            id="PW"
            placeholder="비밀번호를 입력해주세요"
          />
          <div className="mt-3">
            <ButtonComponent text="로그인" onClick={handleLogin} />
          </div>
        </div>

        <div className="text-center my-2">
          <h1 className="text-sm mb-1">계정이 없으시다면?</h1>
          <ButtonComponent text="회원가입" onClick={handleSignup} />
        </div>
      </div>
    </div>
  );
};

export default Login;
