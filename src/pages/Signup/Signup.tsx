import React, { useState } from 'react';
import InputField from './../../components/signup/SignupInput'
import useInput from './../../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { register, RegisterData } from '../../api/auth';

const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);

    const mutation: UseMutationResult<any, Error, RegisterData> = useMutation<any, Error, RegisterData>({
        mutationFn: register,
        onSuccess: () => {
          alert('회원가입 성공');
          navigate('/login');
        },
        onError: (error: Error) => {
          console.log(error);
          alert('회원가입 실패');
        },
    });

    const emailInput = useInput({
        initialValue: '',
        validationFn: (value) => {
          if (!value.trim()) {
            return '이메일을 입력해주세요.';
          }
          if (!/\S+@\S+\.\S+/.test(value)) {
            return '올바른 이메일 형식을 입력해주세요.';
          }
          return undefined;
        }
    });

    const nameInput = useInput({
        initialValue: '',
        validationFn: (value: string) =>
            value.trim() === '' ? '필수항목입니다!' : undefined,
    });

    const passwordInput = useInput({
        initialValue: '',
        validationFn: (value: string) =>
            value.length < 8 ? '비밀번호는 최소 8자 이상이어야 합니다.' : undefined,
    });
    
    const confirmPasswordInput = useInput({
        initialValue: '',
        validationFn: (value: string) =>
            value !== passwordInput.value ? '비밀번호가 일치하지 않습니다.' : undefined,
    });

    const githubInput = useInput({
        initialValue: '',
        validationFn: () => undefined,
    });

    const introduceInput = useInput({
        initialValue: '',
        validationFn: () => undefined,
    });

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);

        emailInput.validate();
        nameInput.validate();
        passwordInput.validate();
        confirmPasswordInput.validate();

        if (
            !emailInput.value ||
            !nameInput.value ||
            !passwordInput.value ||
            !confirmPasswordInput.value ||
            emailInput.error ||
            nameInput.error ||
            passwordInput.error ||
            confirmPasswordInput.error
        ) {
            console.log('회원가입 에러');
            return;
        }
        mutation.mutate({
            email: emailInput.value,
            password: passwordInput.value,
            name: nameInput.value,
            github: githubInput.value,
            introduce: introduceInput.value
        });
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen my-4'>
            <div className='text-darkblue text-center mb-2'>
                <h1 className='text-3xl font-bold mb-4'>회원가입</h1>
            </div>

            <div className="flex flex-col text-darkblue border-2 border-skyblue rounded-2xl p-10">
                <InputField
                    title="ID *"
                    type="text"
                    value={emailInput.value}
                    onChange={(e) => {
                        emailInput.handleChange(e.target.value);
                        if (submitted) emailInput.validate();
                    }}
                    placeholder="이메일 형식의 아이디를 입력해주세요"
                    error={submitted && emailInput.error}
                />

                <InputField
                    title="비밀번호 *"
                    type="password"
                    value={passwordInput.value}
                    onChange={(e) => {
                        passwordInput.handleChange(e.target.value);
                        if (submitted) passwordInput.validate();
                    }}
                    placeholder="비밀번호를 입력해주세요"
                    error={submitted && passwordInput.error}
                />

                <InputField
                    title="비밀번호 확인 *"
                    type="password"
                    value={confirmPasswordInput.value}
                    onChange={(e) => {
                        confirmPasswordInput.handleChange(e.target.value);
                        if (submitted) confirmPasswordInput.validate();
                    }}
                    placeholder="비밀번호 확인"
                    error={submitted && confirmPasswordInput.error}
                />

                <InputField
                    title="이름(닉네임) *"
                    type="text"
                    value={nameInput.value}
                    onChange={(e) => {
                        nameInput.handleChange(e.target.value);
                        if (submitted) nameInput.validate();
                    }}
                    placeholder="이름을 입력해주세요"
                    error={submitted && nameInput.error}
                />

                <InputField
                    title="Github (선택)"
                    type="text"
                    value={githubInput.value}
                    onChange={(e) => githubInput.handleChange(e.target.value)}
                    placeholder="Github URL을 입력해주세요"
                />

                <InputField
                    title="Introduce (선택)"
                    type="text"
                    value={introduceInput.value}
                    onChange={(e) => introduceInput.handleChange(e.target.value)}
                    placeholder="한 줄 소개를 자유롭게 입력해주세요"
                />

                <div className="flex justify-center mt-5">
                    <button
                        className="text-darkblue border-darkblue w-full max-w-xs h-11 border-2 rounded-lg"
                        onClick={handleSignUp}
                    >
                        가입하기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
