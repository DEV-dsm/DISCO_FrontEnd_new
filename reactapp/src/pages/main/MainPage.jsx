import React from "react";
import styled from "styled-components";
import Top from "../../components/common/Top";
import MainHeader from "./MainHeader";
import MainContainer from "./MainContainer";
import MainLink from "./MainLink";

/**
 * @return 메인페이지
 */

export default function MainPage() {
  return (
    <>
      <Container>
        <Top myBtnText={"mypage"} />
        <Box>
          <MainHeader />
          <MainContainer/>
          <MainLink />
        </Box>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Box = styled.div`
  width: 900px;
`;
