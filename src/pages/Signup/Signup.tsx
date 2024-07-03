import React, { useState } from 'react';
import InputField from './../../components/signup/SignupInput'
import useInput from './../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);

    const idInput = useInput({
        initialValue: '',
        validationFn: (value: string) =>
            !value.includes('@') ? '올바른 이메일 주소를 입력해주세요.' : undefined,
    });

    const nameInput = useInput({
        initialValue: '',
        validationFn: (value: string) =>
            value.trim() === '' ? '필수항목입니다!' : undefined,
    });

    const passwordInput = useInput({
        initialValue: '',
        validationFn: (value: string) =>
            value.length < 6 ? '비밀번호는 최소 6자 이상이어야 합니다.' : undefined,
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

    const introductionInput = useInput({
        initialValue: '',
        validationFn: () => undefined,
    });

    const handleSignUp = () => {
        setSubmitted(true);

        idInput.validate();
        nameInput.validate();
        passwordInput.validate();
        confirmPasswordInput.validate();

        if (
            !idInput.value ||
            !nameInput.value ||
            !passwordInput.value ||
            !confirmPasswordInput.value ||
            idInput.error ||
            nameInput.error ||
            passwordInput.error ||
            confirmPasswordInput.error
        ) {
            console.log('회원가입 에러');
            return;
        }
        
        navigate('/login');
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
                    value={idInput.value}
                    onChange={idInput.handleChange}
                    placeholder="이메일 형식의 아이디를 입력해주세요"
                    error={submitted && idInput.error}
                />

                <InputField
                    title="비밀번호 *"
                    type="password"
                    value={passwordInput.value}
                    onChange={passwordInput.handleChange}
                    placeholder="비밀번호를 입력해주세요"
                    error={submitted && passwordInput.error}
                />

                <InputField
                    title="비밀번호 확인 *"
                    type="password"
                    value={confirmPasswordInput.value}
                    onChange={confirmPasswordInput.handleChange}
                    placeholder="비밀번호 확인"
                    error={submitted && confirmPasswordInput.error}
                />

                <InputField
                    title="이름(닉네임) *"
                    type="text"
                    value={nameInput.value}
                    onChange={nameInput.handleChange}
                    placeholder="이름을 입력해주세요"
                    error={submitted && nameInput.error}
                />

                <InputField
                    title="Github (선택)"
                    type="text"
                    value={githubInput.value}
                    onChange={githubInput.handleChange}
                    placeholder="Github URL을 입력해주세요"
                />

                <InputField
                    title="Introduce (선택)"
                    type="text"
                    value={introductionInput.value}
                    onChange={introductionInput.handleChange}
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
