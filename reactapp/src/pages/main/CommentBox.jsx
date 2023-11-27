import React from "react";
import styled from "styled-components";
import CommentBoxTag from "./CommentBoxTag";

/**
 * @return 답글 및 대댓글 컴포넌트
 */

export default function Comment() {
  return (
    <>
      <CommentUpload>
        <PostedComment>
          <Comment>댓글입니다 댓글입니다 이것은 댓글</Comment>
          <CommentBoxTag />
          <Reply>
            <CommentText>
              대댓글 답글입니다 이것은,, 대댓글 답글답글 대댓글 답글입니다
              이것은,, 대댓글 답글답글대댓글 답글입니다 이것은,, 대댓글 답글답글
            </CommentText>
          </Reply>
        </PostedComment>

        <PostedComment>
          <CommentText>
            코멘트 답글을 적는 공간입니다 아무말을 작성하여 너비가 어떻게
            지정되는지 실험중입니다 이것은 아무말 아무 생각 없이 적는 말입니다
            언제까지 적어야 과연 끝까지 도달할까요 예제글을 찾아야될까요
            어디까지 적을까요 하하하 안녕하세요 반가워요 감사해요 지금은 디스코
            퍼블리싱을 짜는 중입니다 갑자기 생각이 났는데 여기 글자제한은 안두는
            건가요?
          </CommentText>
          <CommentBoxTag />
          <Reply>
            <CommentText>
              대댓글 답글입니다 이것은,, 대댓글 답글답글 대댓글 답글입니다
              이것은,, 대댓글 답글답글대댓글 답글입니다 이것은,, 대댓글 답글답글
            </CommentText>
          </Reply>
        </PostedComment>
      </CommentUpload>
    </>
  );
}

const CommentUpload = styled.div`
  position: relative;
  max-height: 100px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
  }

  &::-webkit-scrollbar-track {
    background-color: #c3c3c3;
  }
`;

const PostedComment = styled.div`
  background: #e2e2e2;
  border: none;
  width: 480px;
  height: auto;
  padding: 2px 30px;
  margin: 5px 0px 0px 0px;
  position: relative;
`;

const CommentText = styled.p`
  color: #2e3749;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 2px 0px;
`;

const Reply = styled.div`
  margin: 0px 0px 0px 15px;
`;
