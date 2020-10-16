import { post } from './axios';

const LOGIN_URL = '/api/auth';
const REGISTER_URL = "/api/auths";

// export const login = async (email, password) => {
//     // debugger;
//     const data = {
//         email,
//         password
//     };

//     // return post(LOGIN_URL, data).then(res => res.data.data.token);
//     return await post(LOGIN_URL, data);
// };

// export const login = async (email, password) => {
//     // debugger;
//     const data = {
//         email,
//         password
//     };

//     // return post(LOGIN_URL, data).then(res => res.data.data.token);
//     return await post(LOGIN_URL, data);
// };

export const login = async (email, password) => {
    // debugger;
    return await post(LOGIN_URL, {
        email,
        password,
    })
    // .then((res) => {
    //     console.log(res);
    //     debugger;
    //     return res.data.data.token;
    // })

};


export const register = registerForm => {
    return post(REGISTER_URL, registerForm);
};