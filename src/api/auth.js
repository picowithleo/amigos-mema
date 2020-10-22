import { post } from './axios';

const LOGIN_URL = '/api/auth';
const REGISTER_URL = "/api/auths";
const USER_URL = '/api/users';

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


// export const register = registerForm => {
//     return post(REGISTER_URL, registerForm);
// };

export const register = (email, password, username,
    country,
    language,
    proficiencyLevel,
    avatar) => {
    return post(REGISTER_URL, {
        email,
        password,
        username,
        country,
        language,
        proficiencyLevel,
        avatar
    })
};

export const users = (email, password, username,
    country,
    language,
    proficiencyLevel,
    avatar) => {
    return post(USER_URL, {
        email,
        password,
        username,
        country,
        language,
        proficiencyLevel,
        avatar
    })
};