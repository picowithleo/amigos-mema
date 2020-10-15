import jwt from "jsonwebtoken";
const JWT_TOKEN_NAME =  'jwt-token';



export const getToken = () => localStorage.getItem(JWT_TOKEN_NAME);

export const setToken = token => localStorage.setItem(JWT_TOKEN_NAME, token);

export const removeToken = () => localStorage.removeItem(JWT_TOKEN_NAME);


export const isLoggedIn = () => {
    // return !!localStorage.getItem(JWT_TOKEN_NAME);
    const token = localStorage.getItem(JWT_TOKEN_NAME); // !! => boolean

    if (!token) return false;
    debugger;
    console.log(JSON.parse(JSON.stringify(token)));
    const decodedToken = jwt.decode(token);
    // const expirationTime = decodedToken.exp * 1000; // exp: second; Date.now(): millisecond
    // const isExpired = Date.now() - expirationTime > 0; // now - past > 0 => expired
    
    // return !isExpired;
  };