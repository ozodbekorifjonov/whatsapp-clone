import React from 'react';
import styled from 'styled-components';
import ChatBodyEmpty from './ChatBodyEmpty';
import { useParams } from 'react-router-dom';
import ChatBodyActive from './ChatBodyActive';

const StyledChatBody = styled.div`
  position: relative;
  width: 760px;
  background-color: #fafafa;
  box-sizing: border-box;
  height: inherit;
  display: flex;
  flex-direction: column;
`;

function ChatBody() {
  let { id } = useParams();

  return <StyledChatBody>{id ? <ChatBodyActive /> : <ChatBodyEmpty />}</StyledChatBody>;
}

export default ChatBody;
