import axios from 'axios';

const loginURL = 'http://localhost:3000/api/login/';
const logoutURL = 'http://localhost:3000/api/logout/';

export const apiLogin = {
  login: async payload => {
    const res = await axios.post(loginURL, payload);
    return res.data;
  }
};

export const apiLogout = {
  logout: async () => {
    const res = await axios.post(logoutURL);
    return res.data;
  }
};
