import axios, { AxiosError, AxiosResponse } from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:3004/',
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
