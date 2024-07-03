import { useState } from 'react';
import { styled } from 'styled-components';
import { notify } from '../../components/notice/Toast';

function PasswordEdit() {
  return (
    <Container>
      <PasswordEditTitle>비밀번호 변경</PasswordEditTitle>
      <PasswordEditBox>
        <PasswordEditRow>
          <PasswordEditSubTitle>현재 비밀번호 *</PasswordEditSubTitle>
          <PasswordEditInput type="password" />
        </PasswordEditRow>
        <PasswordEditRow>
          <PasswordEditSubTitle>새 비밀번호 *</PasswordEditSubTitle>
          <PasswordEditInput type="password" />
        </PasswordEditRow>
        <PasswordEditRow>
          <PasswordEditSubTitle>새 비밀번호 확인*</PasswordEditSubTitle>
          <PasswordEditInput type="password" />
        </PasswordEditRow>
        <PasswordEditButton
          onClick={() => {
            notify({
              type: 'error',
              text: '현재 비밀번호가 맞지 않습니다.',
            });
          }}
        >
          비밀번호 변경하기
        </PasswordEditButton>
      </PasswordEditBox>
    </Container>
  );
}

export default PasswordEdit;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  background-color: #ffffff;
`;

const PasswordEditTitle = styled.div`
  width: 261px;
  font-family: 'MangoDdobak';
  font-style: normal;
  font-weight: 400;
  font-size: 41px;
  line-height: 44px;
  color: #001354;
  text-align: center;
`;

const PasswordEditBox = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 413px;
  margin-top: 40px;
  background: #ffffff;
  border: 2px solid #d4e8ff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding-top: 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const PasswordEditRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  text-align: left;
`;

const PasswordEditSubTitle = styled.div`
  width: 100%;
  max-width: 326px;
  font-family: 'MangoDdobak';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #001354;
  margin-bottom: 10px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  margin-top: 27;
`;

const PasswordEditInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  max-width: 326px;
  height: 39px;
  background: #ffffff;
  border: 1px solid #001354;
  border-radius: 10px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
`;
const PasswordEditButton = styled.button`
  box-sizing: border-box;
  width: 280px;
  height: 44px;
  background: #ffffff;
  border: 2px solid #001354;
  border-radius: 10px;
  margin-top: 35px;

  font-family: 'MangoDdobak';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #001354;
`;
