import React from 'react';
import ChatBar from '../components/chat-bar/ChatBar';
import ChatBody from '../components/chat-body/ChatBody';
import Container from '../UI/Container';
import ChatCustomStyle from '../components/ChatCustomStyle';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth-provider';

function Chat() {
  const { idInstance, apiTokenInstance } = useAuth();

  if (!idInstance && !apiTokenInstance) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <>
      <Container>
        <ChatCustomStyle>
          <ChatBar />
          <ChatBody />
        </ChatCustomStyle>
      </Container>
    </>
  );
}

export default Chat;
