import styled from "styled-components";

const Nav = styled.div`
  margin-bottom: 16px;
  height: 64px;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;

  img {
    height: 30px;
  }

  a {
    color: #000;
  }
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  height: calc(100vh - 100px);
  padding: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.div`
  background-color: #1b1f29;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  @media (max-width: 900px) {
    border-radius: 0px;
  }

  .inplayer-paywall {
    width: 100%;
    color: #fff;

    .preview-text {
      color: #fff;
      position: absolute;
      bottom: -30px;
      width: 100%;
      text-align: center;
    }
  }

  .preview-frame {
    > div {
      position: relative;
      // overflow: hidden;
      padding-top: 56.25%;
    }

    .inplayer-preview-box {
      padding: 0px;
      border: none;
    }

    .iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
`;

const Panel = styled.div``;

const EventDetails = styled.div`
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
  border-radius: 8px;
  height: 100%;

  h3 {
    margin-top: 0px;
  }
`;

const Input = styled.input`
  outline: none;
  border: 1px solid #ccc;
  height: 48px;
  border-radius: 4px;
  width: 100%;
  padding: 0px 24px;
  box-sizing: border-box;
  margin-bottom: 12px;
  font-size: 18px;
`;

const SecondaryText = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #757a8a;
  text-align: center;
  margin-top: 0px;
`;

const ChatNotLoggedIn = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: 120px;
    margin-bottom: 24px;
  }
`;

const Error = styled.div`
  margin-top: 12px;
  color: red;
`;

const Button = styled.button`
  border: none;
  height: 48px;
  width: 100%;
  outline: none;
  background: #000;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: 0.2s ease;

  ${props => props.mb && `margin-bottom: ${props.mb};`}

  background: ${props => (props.google ? "#de5246" : null)};
  background: ${props => (props.facebook ? "#3b5998" : null)};

  ${props => props.mb && `margin-bottom: ${props.mb};`}


  &:hover {
    transform: scale(1.02);
  }
`;

const SectionTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #2c3242;
`;

const ChatView = styled.div`
  height: 100%;
  position: relative;

  .chat-header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  img {
    height: 65px;
    margin-right: 12px;
  }

  @media (max-width: 900px) {
    padding-top: 24px;
    border-top: 1px solid #ccc;
    min-height: 420px;
  }
`;

const NewMessages = styled.div`
  position: absolute;
  bottom: 40px;
  text-align: center;
  width: 100%;
  color: red;
  cursor: pointer;
`;

const MessageList = styled.div`
  overflow-y: auto;
  height: calc(100vh - 230px);
  max-height: calc(100vh - 230px);
  background-color: #fafafa;
  padding: 16px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    position: relative;
  }

  .avatar {
    position: absolute;
    border-radius: 50px;
    height: 24px;
    width: 24px;
    background-color: #f5f5f5;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6px;
    left: -3px;
  }

  .body {
    margin-top: 2px;
    margin-bottom: 0px;
    color: #2c3242;
    font-size: 14px;
    padding-left: 30px;
    line-height: 1.35;
  }

  .user {
    margin-left: 6px;
    font-size: 14px;
    line-height: 16px;
    color: #2c3242;
    font-weight: 600;
  }

  .time {
    font-size: 12px;
    line-height: 16px;
    color: #979ba8;
  }
`;

const Message = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  padding: 6px 12px;
  border-radius: 4px;
  border-bottom: 1px solid #fafafa;
  background-color: ${props => (props.you ? "#ecf2ff" : "#fff")};
`;

const MessageBox = styled.div`
  position: absolute;
  bottom: 4px;
  height: 48px;
  background: #ffffff;
  width: 100%;
  padding-top: 12px;
  border-top: 1px solid #fafafa;

  input {
    outline: none;
    border: 1px solid #ccc;
    height: 48px;
    border-radius: 4px;
    width: 100%;
    padding: 0px 24px;
    box-sizing: border-box;
    margin-bottom: 0px;
    font-size: 14px;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;

export {
  PageContainer,
  Main,
  Panel,
  EventDetails,
  Nav,
  Button,
  ChatNotLoggedIn,
  SectionTitle,
  Input,
  SecondaryText,
  Error,
  ChatView,
  MessageBox,
  MessageList,
  Message,
  LoadingWrapper,
  NewMessages
};
