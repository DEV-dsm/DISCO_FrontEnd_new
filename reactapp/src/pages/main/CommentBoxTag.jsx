import React from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";
import { ReactComponent as Setting } from "../../assets/Setting.svg";

export default function CommentBoxText() {
  return (
    <>
      <ArrowTag>
        <Arrow />
      </ArrowTag>
      <SettingTag>
        <Setting />
      </SettingTag>
    </>
  );
}

const ArrowTag = styled.div`
  position: absolute;
  top: 2px;
  left: 10px;
`;

const SettingTag = styled.div`
  position: absolute;
  top: 3px;
  right: 8px;
`;
