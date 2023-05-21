import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import WarningMessage from './WarningMessage';
import RecipientMessage from './RecipientMessage';
import SenderMessage from './SenderMessage';

const StyledChatBodyMessages = styled.div`
  background: #fafafa;
  width: 100%;
  padding: 24px 40px;
  box-sizing: border-box;
  height: inherit;
  overflow: auto;

  .message__chats {
    display: flex;
    flex-direction: column;
  }
`;

function ChatBodyMessages({ messages }) {
  const lastMessageRef = useRef(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <StyledChatBodyMessages>
      <WarningMessage />
      <div className="message__chats">
        {messages
          .slice(0)
          .reverse()
          ?.map((message) => (
            <div key={message.idMessage}>
              {message.type === 'outgoing' ? (
                <SenderMessage message={message.textMessage} timestamp={message.timestamp} />
              ) : (
                <RecipientMessage message={message.textMessage} timestamp={message.timestamp} />
              )}
            </div>
          ))}
        <div ref={lastMessageRef} />
      </div>
    </StyledChatBodyMessages>
  );
}

export default ChatBodyMessages;
