import React, { useState }from "react";
import styled from "styled-components";
import AuthTitle from "../../components/common/AuthTitle";
import AuthButton from "../../components/common/AuthButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/**
 * @return 회원가입
 */

export default function SignUp() {

  return (
    <>
      <Container>
        <AuthTitle title="회원가입" />
        <InputBox>
          <Input 
            type="text" 
            placeholder="이름을 입력하세요" 
          />
          <Email>
            <EmailInput type="email" placeholder="이메일을 입력하세요" />
            <Selection>
              <Option value={"gmail"}>@gmail.com</Option>
              <Option value={"naver"}>@naver.com</Option>
              <Option value={"daum"}>@daum.com</Option>
              <Option value={"user"}>사용자 지정</Option>
            </Selection>
          </Email>
          <Input 
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
          <Input 
            type="password"
            placeholder="비밀번호를 재입력하세요" 
          />
          <Input type="text" placeholder="인증번호를 입력하세요" />
          <AuthButton text="가입하기"/>
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
  height: 40px;
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

const Email = styled.div`
  display: flex;
  justify-content: space-around;
`;

const EmailInput = styled.input`
  margin-bottom: 25px;
  padding-left: 20px;
  display: inline-block;
  width: 290px;
  height: 40px;
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

const Selection = styled.select`
  margin-bottom: 25px;
  padding: 0px 10px;
  display: inline-block;
  margin: 0px 0px 0px 10px;
  width: 210px;
  height: 40px;
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

const Option = styled.option``;
