import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import Icon from '../../assets/icons/Icon';
import { useContact } from '../../store/contact-provider';
import { useParams } from 'react-router-dom';

const StyledChatBodyFooter = styled.div`
  max-height: 88px;
  background: #f7f7f7;
  width: 100%;
  padding: 16px 24px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  textarea {
    background: #ffffff;
    border-radius: 24px;
    padding: 12px 24px;
    border: none;
    resize: none;
    outline: none;
    width: 100%;

    font-family: 'Plus Jakarta Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    &::placeholder {
      color: #8f8f8f;
    }
  }

  .send-message {
    cursor: pointer;
    margin-left: 8px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

function ChatBodyFooter() {
  const textareaRef = useRef(null);
  const { sendTextMessage, getChatHistory } = useContact();
  let { id } = useParams();

  useEffect(() => {
    textareaRef.current.focus();
  }, [id]);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
      return false;
    }
  };

  const sendMessage = () => {
    const message = textareaRef.current.value;
    if (message !== '') {
      sendTextMessage(id, message);
      getChatHistory(id);
      textareaRef.current.value = '';
    }
  };

  return (
    <StyledChatBodyFooter>
      <TextareaAutosize
        minRows={1}
        maxRows={3}
        onKeyDown={handleKeyDown}
        ref={textareaRef}
        name="text"
        placeholder={'Say Something...'}
      />
      <div className="send-message" onClick={sendMessage}>
        <Icon type="send" />
      </div>
    </StyledChatBodyFooter>
  );
}

export default ChatBodyFooter;
