import React, { createContext, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { getChatHistoryAPI, getContactInfoAPI, sendTextMessageAPI } from '../api/greenApi';
import {useAuth} from "./auth-provider";

const ContextProps = {
  isLoading: false,
  contactInfo: null,
  messages: [],
  getContactInfo: () => {},
  getChatHistory: () => {},
  sendTextMessage: () => {},
};

const ContactContext = createContext(ContextProps);

export function ProvideContact({ children }) {
  const contact = useProvideContact();

  return React.createElement(ContactContext.Provider, { value: contact }, children);
}

export const useContact = () => useContext(ContactContext);

function useProvideContact() {
  const [isLoading, setLoading] = useState(false);
  const [contactInfo, setContactInfo] = useState(null);
  const [messages, setMessages] = useState([]);
  const { idInstance, apiTokenInstance } = useAuth();

  const getContactInfo = useCallback(async (chatId) => {
    try {
      setLoading(true);
      const res = await getContactInfoAPI(chatId,idInstance, apiTokenInstance);
      setLoading(false);
      setContactInfo(res.data);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }, []);

  const getChatHistory = useCallback(async (chatId) => {
    try {
      setLoading(true);
      const res = await getChatHistoryAPI(chatId,idInstance, apiTokenInstance);
      setLoading(false);
      setMessages(res.data);
    } catch (error) {
      toast.error(error.message);

      setLoading(false);
    }
  }, []);

  const sendTextMessage = useCallback(async (chatId, message) => {
    try {
      setLoading(true);
      await sendTextMessageAPI(chatId, message,idInstance, apiTokenInstance);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }, []);

  return {
    isLoading,
    contactInfo,
    messages,
    getContactInfo,
    getChatHistory,
    sendTextMessage,
  };
}
