import React from "react";
import styled from "styled-components";
import { ReactComponent as Label } from "../../assets/Label.svg";
import { ReactComponent as Connection } from "../../assets/Connection.svg";

/**
 * @return 라벨및 이음새 태그 컴포넌트
 */

export default function MainElement() {
  return (
    <>
      <Front>
        <Label />
        <Title>History</Title>
      </Front>
      <Back>
        <Label />
      </Back>
      <Up>
        <Connection />
      </Up>
      <Down>
        <Connection />
      </Down>
    </>
  );
}
const Title = styled.p`
  color: #0e0e0e;
  font-size: 16px;
  font-weight: 700;
  position: absolute;
  top: -13px;
  left: 50px;
`;

const Front = styled.div`
  position: absolute;
  top: 240px;
  left: 380px;
`;

const Back = styled.div`
  position: absolute;
  top: 224px;
  left: 360px;
  z-index: -1;
`;

const Up = styled.div`
  position: absolute;
  top: 260px;
  left: 1015px;
`;

const Down = styled.div`
  position: absolute;
  top: 700px;
  left: 1015px;
`;
