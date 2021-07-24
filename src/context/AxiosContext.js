import { createContext, useContext, useMemo } from 'react';
import Axios from 'axios';

export const AxiosContext = createContext();

export function AxiosProvider({ children }) {
  const axios = useMemo(() => {
    console.log(process.env.REACT_APP_API_BASE_URL);
    const axios = Axios.create({
      baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(axios);
    //INTERCERPTOR
    axios.interceptors.request.use((config) => {
      const data = localStorage.getItem('authData') || null;
      const authData = data ? JSON.parse(data) : null;

      if (authData?.token) {
        config.headers.Authorization = `Bearer ${authData.token}`;
      }
      return config;
    });
    return axios;
  }, []);

  return (
    <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
  );
}

export function useAxios() {
  return useContext(AxiosContext);
}
