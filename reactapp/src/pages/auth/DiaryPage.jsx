import React from "react";
import styled from "styled-components";
import { ReactComponent as Pen } from "../../assets/Pen.svg";
import { ReactComponent as Book } from "../../assets/Book.svg";
import Top from "../../components/common/Top";

export default function DiaryPage() {
  return (
    <>
      <Container>
        <Top myBtnText={"mypage"} />
        <DetailedFunction>
          <History>History</History>
          <Write>
            <Pen />
            <WriteText>글 작성</WriteText>
          </Write>
          <Diary>
            <Book />
            <DiaryText>다이어리</DiaryText>
          </Diary>
        </DetailedFunction>
        <Horizen></Horizen>
        <Post>
          <PostText>이것은 게시물 제목입니다.</PostText>
          <ButtonDelete>삭제</ButtonDelete>
          <ButtonChange>수정</ButtonChange>
        </Post>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
`;

const DetailedFunction = styled.div`
  display: flex;
`;

const History = styled.p`
  font-size: 22px;
  font-weight: 400;
`;

const Write = styled.div`
  display: flex;
  align-items: center;
  margin-left: 620px;
`;

const WriteText = styled.p`
  margin-left: 7px;
`;

const Diary = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const DiaryText = styled.p`
  margin-left: 6px;
  color: #4e71b5;
`;

const Horizen = styled.div`
  width: 900px;
  height: 2px;
  border-top: 1px solid black;
`;

const Post = styled.div`
  display: flex;
  align-items: center;
  background-color: #ededed;
  width: 900px;
  height: 50px;
  border-radius: 5px;
  margin-top: 13px;
`;

const PostText = styled.p`
  margin: 0 0 0 26px;
`;

const ButtonDelete = styled.button`
  border: none;
  margin-left: 600px;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonChange = styled.button`
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
