import axios from 'axios';
import { CHAT_HISTORY_COUNT } from '../constants';

const baseURL = process.env.REACT_APP_API_URL;

export async function getContactsAPI(idInstance, apiTokenInstance) {
  return axios({
    method: 'get',
    url: `${baseURL}/waInstance${idInstance}/getContacts/${apiTokenInstance}`,
    headers: {
      contentType: 'application/json',
    },
  });
}

export async function getContactInfoAPI(chatId, idInstance, apiTokenInstance) {
  return axios({
    method: 'post',
    url: `${baseURL}/waInstance${idInstance}/GetContactInfo/${apiTokenInstance}`,
    headers: {
      contentType: 'application/json',
    },
    data: {
      chatId,
    },
  });
}

export async function getChatHistoryAPI(chatId, idInstance, apiTokenInstance) {
  return axios({
    method: 'post',
    url: `${baseURL}/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
    headers: {
      contentType: 'application/json',
    },
    data: {
      chatId,
      count: CHAT_HISTORY_COUNT,
    },
  });
}

export async function sendTextMessageAPI(chatId, message, idInstance, apiTokenInstance) {
  return axios({
    method: 'post',
    url: `${baseURL}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
    headers: {
      contentType: 'application/json',
    },
    data: {
      chatId,
      message,
    },
  });
}
