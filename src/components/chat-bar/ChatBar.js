import React from 'react';
import styled from 'styled-components';
import ChatBarHeader from './ChatBarHeader';
import ChatBarBody from './ChatBarBody';

const StyledChatBar = styled.div`
  width: 360px;
  background-color: #f5fafc;
  padding: 20px 21px;
  height: inherit;
  display: flex;
  flex-direction: column;
`;

function ChatBar() {
  return (
    <StyledChatBar>
      <ChatBarHeader />
      <ChatBarBody />
    </StyledChatBar>
  );
}

export default ChatBar;
