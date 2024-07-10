import { ChangeEvent, useState } from 'react';
import { styled } from 'styled-components';
import { notify } from '../../components/Notice/Toast';
import EmailInputField from '../../components/ValidateEmail/EmailInputField';
import Timer from '../../components/ValidateEmail/Timer';

function PasswordEdit() {
  const [showCode, setShowCode] = useState<boolean>(false);
  const [emailButton, setEmailButton] = useState<string>('normal');
  const [codeButton, setCodeButton] = useState<string>('normal');
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [firstPassword, setFirstPassword] = useState<string>('');
  const [secondPassword, setSecondPassword] = useState<string>('');

  const handleFirstPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstPassword(e.target.value);
  };

  const handleSecondPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondPassword(e.target.value);
  };

  const submitPassword = () => {
    if (firstPassword !== secondPassword) {
      notify({ type: 'error', text: '비밀번호를 확인해주세요' });
    }
  };
  const handleEmailvalidate = () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-darkblue">
        비밀번호 변경/초기화
      </h1>
      <div className="flex flex-col gap-2 border-2 border-skyblue rounded-3xl p-10 relative">
        <div className="flex">
          <EmailInputField
            title="이메일 입력란"
            onclick={() => {
              setShowCode(true);
              setEmailButton('sended');
              setShowTimer(true);
            }}
            onchange={() => console.log('test')}
            buttontext="이메일 인증"
            showbutton={true}
            type={'email'}
            sort={emailButton}
          />
          {showTimer && (
            <div className="absolute ml-[328px] mt-8">
              <Timer />
            </div>
          )}
        </div>
        {showCode ? (
          <EmailInputField
            title="인증코드"
            onclick={() => {
              setCodeButton('cheack');
              setShowTimer(false);
            }}
            onchange={() => console.log('test')}
            buttontext="확인"
            showbutton={true}
            sort={codeButton}
          />
        ) : (
          <></>
        )}
        <EmailInputField
          title="새로운 비밀번호"
          onclick={() => console.log('test')}
          onchange={handleFirstPasswordChange}
          showbutton={false}
          type={'password'}
        />
        <EmailInputField
          title="새로운 비밀번호 확인"
          onclick={() => console.log('test')}
          onchange={handleSecondPasswordChange}
          showbutton={false}
          type={'password'}
        />
        <button
          onClick={submitPassword}
          className="flex w-80 h-10 border-darkblue bg-darkblue items-center justify-center rounded-lg border-2 text-sm text-white"
        >
          비밀번호 변경
        </button>
      </div>
    </div>
  );
}

export default PasswordEdit;
