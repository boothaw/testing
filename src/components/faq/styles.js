import styled from "styled-components";

import theme from "../../lib/styles/theme";

const FaqWrap = styled.div`
  border-top: 2px solid black;
  padding: 24px 12px;

  &:hover {
    cursor: pointer;
    background-color: #f5f5f5;
    transition: 0.2s ease;
  }

  background-color: ${({ open }) => open && '#f5f5f5'};
`;

const FaqTitle = styled.div`
  font-size: 18px;
  font-family: ${theme.fonts.sans};
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 14px;
  }
`;

const AnswerContainer = styled.div`
  transition: 0.5s ease;
  ${({ collapse }) =>
    collapse
      ? "max-height: 0px; overflow: hidden; opacity: 0;"
      : "max-height: 500px; opacity: 1"}
`;

const FaqAnswer = styled.p`
  font-size: 14px;
  font-family: ${theme.fonts.serif};
  margin-bottom: 0px;
  line-height: 1.75;
`;

export { FaqWrap, FaqTitle, FaqAnswer, AnswerContainer };
