import React from "react";
import styled from "styled-components";
import AuthTitle from "../../components/common/AuthTitle";
import AuthButton from "../../components/common/AuthButton";

/**
 * @return 비밀번호 변경
 */

export default function ChangePassWord() {
  return (
    <>
      <Container>
        <AuthTitle title="비밀번호 변경" />
        <InputBox>
          <Input type="text" placeholder="기존 비밀번호를 입력하세요" />
          <Input type="password" placeholder="새 비밀번호를 입력하세요" />
          <Input type="password" placeholder="새 비밀번호를 확인해주세요" />
          <AuthButton text="확인" />
        </InputBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  align-items: center;
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 25px;
  padding-left: 20px;
  display: inline-block;
  width: 27%;
  height: 45px;
  font-size: 16px;
  font-weight: 500;
  color: #818181;
  background-color: #f2f5fa;
  border: 0;
  border-radius: 10px;
  &:focus {
    outline-style: none;
  }
`;
