import React, { createContext, useContext, useState } from 'react';
import { const_apiTokenInstance, const_idInstance } from '../constants';

const ContextProps = {
  idInstance: '',
  apiTokenInstance: '',
  setAuthCredentials: () => {},
};

const AuthContext = createContext(ContextProps);

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  return React.createElement(AuthContext.Provider, { value: auth }, children);
}

export const useAuth = () => useContext(AuthContext);

function useProvideAuth() {
  const [idInstance, setIdInstance] = useState(const_idInstance);
  const [apiTokenInstance, setApiTokenInstance] = useState(const_apiTokenInstance);

  const setAuthCredentials = (idInstance, apiTokenInstance) => {
    localStorage.setItem('ID_INSTANCE', idInstance);
    setIdInstance(idInstance);
    localStorage.setItem('API_TOKEN_INSTANCE', apiTokenInstance);
    setApiTokenInstance(apiTokenInstance);
  };

  return {
    idInstance,
    apiTokenInstance,
    setAuthCredentials,
  };
}
