import axios, { AxiosInstance } from "axios";

export const createServiceNoToken = (baseURL?: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Accept-Language": "en-US",
      "Content-Type": "application/json",
    },
  });
  instance.interceptors.request.use((config) => {
    return config;
  });
  return instance;
};
