import axios from 'axios';
import { getToken } from '../utils/auth';
// import { BASE_URL } from '../utils/url';

// axios.defaults.baseURL = 'https://amigos-mema.herokuapp.com/';
// axios.defaults.baseURL = 'http://memaserver-env.eba-hgvg3c3g.ap-southeast-2.elasticbeanstalk.com';
const BASE_URL = 'http://memaserver-env.eba-hgvg3c3g.ap-southeast-2.elasticbeanstalk.com';

axios.defaults.baseURL = BASE_URL;
console.log(axios.defaults.baseURL);
// export const get = (url, config = {}) =>
//     axios.get(url, config);

// export const post = (url, data, config = {}) =>
//     axios.post(url, data, config); 

// export const put = (url, data, config = {}) =>
//     axios.put(url, data, config);

// export const del = (url, config = {}) =>
//     axios.delete(url, config);


// append authorization token since every request
const appendAuthToken = config => {
  const jwtToken = getToken();
  const Authorization = jwtToken && `Bearer ${jwtToken}`;

  return { ...config, headers: { Authorization, ...config.header } };
};


export const get = (url, config = {}) =>
  axios.get(url, appendAuthToken(config));

export const post = (url, data, config = {}) => {
  return axios.post(url, data, appendAuthToken(config));
};

export const put = (url, data, config = {}) =>
  axios.put(url, data, appendAuthToken(config));


export const del = (url, config = {}) =>
  axios.delete(url, appendAuthToken(config));
