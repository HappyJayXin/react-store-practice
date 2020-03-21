import axios, { AxiosError, AxiosResponse } from 'axios';

console.log(process.env.REACT_APP_API_DOMAIN);

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN || 'http://localhost:3003/',
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

Axios.interceptors.response.use(
  response => {
    if(response.status === 200) {
      return response.data;
    }
  },
  error => Promise.reject(error)
);

Axios.interceptors.request.use(
  config => {
    const jwtToken = global.auth.getToken();
    config.headers['Authorization'] = `Bearer ${jwtToken}`;
    return config;
  },
  error => Promise.reject(error)
);

export const Get = (path: string) => {
  return new Promise((resolve, reject) => {
    Axios
      .get(`${path}`)
      .then((response: AxiosResponse) => resolve(response))
      .catch((error: AxiosError) => reject(error));
  });
};

export const Post = (path: string, data: any) => {
  return new Promise((resolve, reject) => {
    Axios
      .post(`${path}`, data)
      .then((response: AxiosResponse) => resolve(response))
      .catch((error: AxiosError) => reject(error));
  });
};

export const Put = (path: string, data: any) => {
  return new Promise((resolve, reject) => {
    Axios
      .put(`${path}`, data)
      .then((response: AxiosResponse) => resolve(response))
      .catch((error: AxiosError) => reject(error));
  });
};

export const Delete = (path: string) => {
  return new Promise((resolve, reject) => {
    Axios
      .delete(`${path}`)
      .then((response: AxiosResponse) => resolve(response))
      .catch((error: AxiosError) => reject(error));
  });
};
