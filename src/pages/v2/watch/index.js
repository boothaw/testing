import React, { useState, useEffect, useRef } from "react";

import fire from "../../../lib/firebase";
import moment from "moment";
import { Spin, message } from "antd";

import StabLogo from "../../../lib/assets/stab-logo.svg";

import {
  PageContainer,
  Main,
  Panel,
  EventDetails,
  Nav,
  ChatNotLoggedIn,
  SectionTitle,
  Button,
  Input,
  SecondaryText,
  Error,
  ChatView,
  MessageBox,
  MessageList,
  Message,
  LoadingWrapper,
  NewMessages
} from "./styles";

import PhoneDoodle from "../../../lib/assets/phone.png";

import Surf100Logo from "../../../lib/assets/surf-100.png";

const Watch = () => {
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [formError, setFormError] = useState("");
  const [userId, setUserId] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState({});
  const [newMessages, setNewMessages] = useState(false);

  const inputRef = useRef();

  const sendMessage = e => {
    if (e.which === 13 && inputRef.current.value !== "") {
      const updates = {};

      const timeStamp = Date.now();
      updates[`/thread/${timeStamp}/message`] = {
        user: window.localStorage.getItem("STAB_HIGH_CHAT_USERNAME"),
        timeSent: timeStamp,
        message: inputRef.current.value,
        color: window.localStorage.getItem("STAB_HIGH_CHAT_COLOR")
      };

      fire
        .database()
        .ref()
        .update(updates)
        .then(() => {
          setCurrentMessage("");
        });
    }
  };

  const removeNewMessages = () => {
    const messageList = document.getElementById("message-list");

    if (messageList) {
      const threshold = messageList.scrollTop;
      const bounds = messageList.scrollHeight - messageList.clientHeight;

      if (bounds - threshold < 200) {
        setNewMessages(false);
      }
    }
  };

  const scrollMessagesToBottom = () => {
    const messageList = document.getElementById("message-list");

    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  };

  useEffect(() => {
    if (signedIn) {
      window.addEventListener("keyup", sendMessage);
    }

    setTimeout(() => {
      const messageList = document.getElementById("message-list");

      if (messageList) {
        messageList.scrollTop = messageList.scrollHeight;
      }
    }, 1500);

    window.addEventListener("scroll", removeNewMessages, true);

    return () => {
      window.removeEventListener("keyup", sendMessage);
      window.removeEventListener("scroll", removeNewMessages, true);
    };
  }, [signedIn]);

  useEffect(() => {
    const checkUserSignedIn = async () => {
      try {
        const user = localStorage.getItem("STAB_HIGH_CHAT_UID");

        if (user) {
          setUserId(user);

          const userDetails = await fire
            .database()
            .ref(`users/${user}`)
            .once("value");

          const value = await userDetails.val();

          if (value.userName) {
            setUsername(value.userName);
            setEmail(value.email);
            setSignedIn(true);
            setFormError(false);
            setShowSignIn(false);

            localStorage.setItem("STAB_HIGH_CHAT_EMAIL", value.email);
            localStorage.setItem("STAB_HIGH_CHAT_USERNAME", value.userName);
            localStorage.setItem("STAB_HIGH_CHAT_COLOR", value.color);
          }
        } else {
          setSignedIn(false);
          setFormError(false);
          setShowSignIn(true);
        }
      } catch (error) {
        setSignedIn(false);
        setFormError(false);
        setShowSignIn(true);
      }
    };

    checkUserSignedIn();

    const threadRef = fire.database().ref("thread");
    threadRef.on("value", function(snapshot) {
      setMessages(snapshot.val());
      // should update message???
      const messageList = document.getElementById("message-list");

      if (messageList) {
        const threshold = messageList.scrollTop;
        const bounds = messageList.scrollHeight - messageList.clientHeight;

        if (bounds - threshold < 200) {
          messageList.scrollTop = messageList.scrollHeight;
        } else {
          setNewMessages(true);
        }
      }
    });

    if (window.InplayerPaywall) {
      var paywall = new window.InplayerPaywall(
        "23b08bc0-c50c-4bb1-8606-6a2db940919e",
        [
          {
            id: 91519
          }
        ]
      );

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  const signInUser = async () => {
    try {
      const signedIn = await fire
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (signedIn.user) {
        setSignedIn(true);
        setUserId(signedIn.user.uid);

        // Fetch username and set it to state..
        const userDetails = await fire
          .database()
          .ref(`users/${signedIn.user.uid}`)
          .once("value");

        const value = await userDetails.val();

        if (value.userName) {
          setUsername(value.userName);
          setEmail(value.email);
          setSignedIn(true);
          setFormError(false);
          setShowSignIn(false);

          localStorage.setItem("STAB_HIGH_CHAT_UID", signedIn.user.uid);
          localStorage.setItem("STAB_HIGH_CHAT_EMAIL", value.email);
          localStorage.setItem("STAB_HIGH_CHAT_USERNAME", value.userName);
          localStorage.setItem("STAB_HIGH_CHAT_COLOR", value.color);
        }
      }
    } catch (error) {
      setFormError("Invalid email or password.");
    }
  };

  const generateRandomColor = () => {
    return "#f5f5f5";
  };

  const createUserAccount = async () => {
    if (!email || !password || !userName) {
      setFormError("Please provide a valid email, password and username");
      return;
    }

    try {
      setLoading(true);
      const newUser = await fire
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (newUser.user) {
        const color = generateRandomColor();

        const updates = {};
        updates[`/users/${newUser.user.uid}/userName`] = userName;
        updates[`/users/${newUser.user.uid}/email`] = email;
        updates[`/users/${newUser.user.uid}/color`] = color;
        updates[`/users/${newUser.user.uid}/createdOn`] = Date.now();

        localStorage.setItem("STAB_HIGH_CHAT_UID", newUser.user.uid);
        localStorage.setItem("STAB_HIGH_CHAT_EMAIL", newUser.user.email);
        localStorage.setItem("STAB_HIGH_CHAT_USERNAME", userName);
        localStorage.setItem("STAB_HIGH_CHAT_COLOR", color);

        fire
          .database()
          .ref()
          .update(updates);

        signInUser();
      }
    } catch (error) {
      setFormError("Error creating user");
    } finally {
      setLoading(false);
    }
  };

  const renderView = () => {
    if (loading) {
      return (
        <LoadingWrapper>
          <Spin />
        </LoadingWrapper>
      );
    }

    if (!signedIn && !showSignIn) {
      return (
        <ChatNotLoggedIn>
          <img src={PhoneDoodle} />
          <SectionTitle>Join the Surf 100 Convo!</SectionTitle>
          <SecondaryText>
            Don't leave the commentary to the judges. Have something to say? Do
            it here.
          </SecondaryText>
          <Input
            onChange={e => setEmail(e.currentTarget.value)}
            placeholder="Email address"
          />
          <Input
            onChange={e => setPassword(e.currentTarget.value)}
            placeholder="Password"
            type="password"
          />
          <Input
            maxLength={20}
            onChange={e => setUsername(e.currentTarget.value)}
            placeholder="Username"
          />
          <Button mb="12px" onClick={createUserAccount} google>
            {loading ? "Loading..." : "Create Account"}
          </Button>
          <Button
            onClick={() => {
              setShowSignIn(true);
              setFormError(false);
            }}
          >
            Sign In
          </Button>
          {formError && <Error>{formError}</Error>}
        </ChatNotLoggedIn>
      );
    }

    if (!signedIn && showSignIn) {
      return (
        <ChatNotLoggedIn>
          <img src={PhoneDoodle} />
          <SectionTitle>Join the Surf 100 Convo!</SectionTitle>
          <SecondaryText>
            Login with your email and password to chat
          </SecondaryText>
          <Input
            onChange={e => setEmail(e.currentTarget.value)}
            placeholder="Email address"
          />
          <Input
            onChange={e => setPassword(e.currentTarget.value)}
            placeholder="Password"
            type="password"
          />
          <Button mb="12px" onClick={signInUser} google>
            {loading ? "Loading..." : "Sign In"}
          </Button>
          <Button
            onClick={() => {
              setShowSignIn(false);
              setFormError(false);
            }}
          >
            No account? Create one.
          </Button>
          {formError && <Error>{formError}</Error>}
        </ChatNotLoggedIn>
      );
    }

    return (
      <ChatView>
        <div className="chat-header">
          <img src={PhoneDoodle} />
          <SectionTitle>Event Chat</SectionTitle>
        </div>

        <MessageList id="message-list">
          {messages &&
            Object.keys(messages).map(message => {
              const m = messages[message];

              return (
                <Message key={message} you={m.message.user === userName}>
                  <div className="header">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        className="avatar"
                        style={{ backgroundColor: m.message.color }}
                      >
                        {m.message.user.charAt(0).toUpperCase()}
                      </div>
                      <div className="user">{m.message.user}</div>
                    </div>

                    <div className="time">
                      {moment(m.message.timeSent).format("MM/DD hh:mm a")}
                    </div>
                  </div>
                  <div className="body">{m.message.message}</div>
                </Message>
              );
            })}
        </MessageList>

        <MessageBox>
          {newMessages && (
            <NewMessages onClick={scrollMessagesToBottom}>
              New Messages
            </NewMessages>
          )}
          <Input
            ref={inputRef}
            onChange={e => setCurrentMessage(e.target.value)}
            value={currentMessage}
            placeholder="Type your message"
          />
        </MessageBox>
      </ChatView>
    );
  };

  return (
    <>
      <Nav>
        <a href="/">
          <img src={Surf100Logo} />
        </a>
        <div>
          <a
            style={{ marginLeft: "8px", fontSize: "18px" }}
            target="_blank"
            href="https://www.facebook.com/StabSurfMagazine/"
          >
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            style={{ marginLeft: "8px", fontSize: "18px" }}
            target="_blank"
            href="https://www.facebook.com/StabSurfMagazine/"
          >
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>

          <a
            style={{ marginLeft: "8px", fontSize: "18px" }}
            target="_blank"
            href="https://twitter.com/stabmagazine?lang=en"
          >
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </Nav>
      <PageContainer>
        <Main>
          <div
            id="inplayer-91519"
            className="inplayer-paywall preview-frame"
          ></div>
        </Main>
        <Panel>
          <EventDetails>{renderView()}</EventDetails>
        </Panel>
      </PageContainer>
    </>
  );
};

export default Watch;
