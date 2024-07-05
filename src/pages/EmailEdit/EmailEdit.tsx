import React from 'react';
import '../../index.css';
import ButtonComponent from '../../components/login/LoginButton';
import LoginInputForm from '../../components/login/LoginInputForm';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import EmailInputField from '../../components/validateEmail/EmailInputField';

const EmailEdit: React.FC = () => {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen my-4">
    //   {' '}
    //   <div className="flex flex-col gap-2 border-2 border-skyblue rounded-3xl p-10">
    //     <EmailInputField
    //       title="이메일 입력란"
    //       onclick={() => console.log('test')}
    //     ></EmailInputField>
    //     <EmailInputField
    //       title="인증코드"
    //       onclick={() => console.log('test')}
    //     ></EmailInputField>
    //   </div>
    // </div>
    <div></div>
  );
};

export default EmailEdit;
