import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const urls = {
  posts: 'posts',
  profile: 'profile'
}

export const callAPI = async (endpoint, method, params = {}, headers = {}, data = {}) => {
  const options = {
    baseURL,
    url: endpoint,
    method,
    params,
    headers,
    data
  };

  const response = await axios(options);
  return response?.data;
};

export const getAllPost = () => {
  return callAPI(urls.posts, 'GET');
}

export const registerApi = (fullname, email, password) => {
  return callAPI(urls.profile, 'POST', {}, {}, {fullname, email, password});
}

export const loginApi = () => {
  return callAPI(urls.profile, 'GET');
}