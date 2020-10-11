import { post } from './axios';

const LOGIN_URL = '/api/auth';
const REGISTER_URL = "/api/auths";

export const login = (email, password) => {
    const data = {
        email,
        password
    };

    return post(LOGIN_URL, data).then(res => res.data.data.token);
};

export const register = registerForm => {
    return post(REGISTER_URL, registerForm);
  };