import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ReactComponent as Label } from "../../assets/Label.svg";

export default function WriteModal({ setWriteModalOpen }) {
  const closeWriteModal = () => {
    setWriteModalOpen(false);
  };

  const [board, setBoard] = useState({
    title: "",
    content: "",
  });

  const { title, content } = board;

  const inputChange = (e) => {
    const { name, value } = e.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const handleDiaryCreate = async (e) => {
    try {
      await axios.post(
        `https://192.168.1.30:8080/post/create`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      closeWriteModal();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <ModalBox>
        <ModalTop>
          <LabelTag>
            <Label />
            <LabelTitle>write</LabelTitle>
          </LabelTag>
          <Title>제목</Title>
          <TitleCenterLine></TitleCenterLine>
          <SubTitle
            name="title"
            type="text"
            onChange={(e) => inputChange(e)}
            value={title}
          ></SubTitle>
        </ModalTop>
        <CenterLine></CenterLine>
        <Content>
          <Text
            name="content"
            type="text"
            onChange={(e) => inputChange(e)}
            value={content}
          ></Text>
        </Content>
        <BtnBox>
          <CancelBtn onClick={closeWriteModal}>취소</CancelBtn>
          <UpdataBtn onClick={handleDiaryCreate}>업로드</UpdataBtn>
        </BtnBox>
      </ModalBox>
    </>
  );
}

const LabelTitle = styled.p`
  color: #0e0e0e;
  font-size: 16px;
  font-weight: 700;
  position: absolute;
  top: -13px;
  left: 60px;
`;

const LabelTag = styled.div`
  position: absolute;
  top: 30px;
  left: -30px;
`;

const ModalBox = styled.div`
  position: absolute;
  background-color: #d9d9d9;
  width: 790px;
  height: 420px;
  border-radius: 7px;
  top: 450px;
  left: 1000px;
`;

const ModalTop = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 0 0;
`;

const TitleCenterLine = styled.div`
  border: 1px solid black;
  height: 16px;
  margin: 5px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0 5px 0 125px;
`;

const SubTitle = styled.textarea`
  font-size: 17px;
  font-weight: 500;
  margin: 0 0 0 5px;
  width: 560px;
  height: 20px;
  background-color: #d9d9d9;
  border: none;
  resize: none;
`;

const CenterLine = styled.div`
  border: 1px solid black;
  width: 620px;
  margin: 5px 0 0 120px;
`;

const Content = styled.div`
  width: 730px;
  height: 270px;
  border-radius: 7px;
  background-color: #ffffff;
  margin: 18px 25px 0 25px;
`;

const Text = styled.textarea`
  padding: 23px 0 0 21px;
  width: 707px;
  height: 246px;
  color: black;
  border: none;
  resize: none;
`;

const BtnBox = styled.div`
  margin: 17px 0 0 550px;
`;

const CancelBtn = styled.button`
  width: 95px;
  height: 30px;
  border-radius: 7px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  border: none;
  background-color: #4e71b5;
  &:active {
    background-color: #6684bf;
  }
  &:hover {
    cursor: pointer;
  }
`;

const UpdataBtn = styled.button`
  width: 95px;
  height: 30px;
  border-radius: 7px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  border: none;
  margin: 0 0 0 12px;
  background-color: #4e71b5;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: #6684bf;
  }
`;
