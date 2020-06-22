import React, { useState } from "react";

import { FaqWrap, FaqTitle, FaqAnswer, AnswerContainer } from "./styles";

import AddIcon from "../../lib/assets/plus-icon.svg";

const Faq = ({ title, p1, p2 }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <FaqWrap open={!collapsed} onClick={() => setCollapsed(!collapsed)}>
      <FaqTitle>
        <span>{title}</span>
        <img src={AddIcon} />
      </FaqTitle>
      <AnswerContainer collapse={collapsed}>
        <FaqAnswer>{p1}</FaqAnswer>
        <FaqAnswer>{p2}</FaqAnswer>
      </AnswerContainer>
    </FaqWrap>
  );
};

export default Faq;
