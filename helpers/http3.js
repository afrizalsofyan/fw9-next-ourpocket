import axios from 'axios';

export const http3 = () => {
  return axios.create({
    baseURL: process.env.BASE_URL
  });
};