import React from 'react';
import ChatBar from '../components/chat-bar/ChatBar';
import ChatBody from '../components/ChatBody';
import Container from '../UI/Container';
import ChatCustomStyle from '../components/ChatCustomStyle';

function Chat() {
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
