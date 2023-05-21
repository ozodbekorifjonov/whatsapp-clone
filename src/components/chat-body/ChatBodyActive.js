import React, { useEffect } from 'react';
import ChatBodyHeader from './ChatBodyHeader';
import ChatBodyMessages from './ChatBodyMessages';
import ChatBodyFooter from './ChatBodyFooter';
import { useParams } from 'react-router-dom';
import { useContact } from '../../store/contact-provider';

function ChatBodyActive() {
  let { id } = useParams();
  const { isLoading, contactInfo, messages, getContactInfo, getChatHistory } = useContact();

  useEffect(() => {
    getContactInfo(id);
    getChatHistory(id);
  }, [getContactInfo, getChatHistory, id]);

  return (
    <>
      <ChatBodyHeader isLoading={isLoading} contactInfo={contactInfo} />
      <ChatBodyMessages messages={messages} />
      <ChatBodyFooter />
    </>
  );
}

export default ChatBodyActive;
