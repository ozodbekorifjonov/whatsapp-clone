import React, { createContext, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { getContactsAPI } from '../api/greenApi';
import {useAuth} from "./auth-provider";

const ContextProps = {
  isLoading: false,
  contactsList: [],
  getContactsList: () => {},
};

const ServiceContext = createContext(ContextProps);

export function ProvideService({ children }) {
  const service = useProvideService();

  return React.createElement(ServiceContext.Provider, { value: service }, children);
}

export const useService = () => useContext(ServiceContext);

function useProvideService() {
  const [isLoading, setLoading] = useState(false);
  const [contactsList, setContactsList] = useState([]);
  const { idInstance, apiTokenInstance } = useAuth();

  const getContactsList = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getContactsAPI(idInstance, apiTokenInstance);
      setLoading(false);
      setContactsList(res.data);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }, []);

  return {
    isLoading,
    contactsList,
    getContactsList,
  };
}
