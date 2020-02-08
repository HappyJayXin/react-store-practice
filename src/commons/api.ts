import _axios from "axios";

const API = (baseUrl = 'http://localhost:3004/') => {
  const instance = _axios.create({
    baseURL: baseUrl,
    responseType: "json"
  });
  return instance;
};

export { API };

export default API();
