import axios from 'axios';
import jwt_decode from 'jwt-decode';

const baseUrl = "https://flaskprojectback1.herokuapp.com/";

const api = axios.create({
  baseURL: baseUrl
})

const rest = {
  signUp: '/sign-up',
  signIn: '/sign-in',
  signOut: '/sign-out',
  verify: '/verify',
  request: '/request',
  getNeeds: '/get-needs',
  profile: '/profile',
  getOtp: '/otp',
};

const set_token = token => {
  return localStorage.setItem('token', token)
}

const get_token = () => {
  return localStorage.getItem('token')
}

const get_user_info = () => {
  const token = get_token()
  if (token) {
    const {user, exp} = jwt_decode(token);
    return {
      id: user.id,
      name: user.name,
      allow_location: user.allow_location,
      exp,
    }
  } else {
    return null;
  }
}

const config = (type: 'formData' | 'json' | 'text') => {
  let contentType;
  switch (type) {
    case 'formData':
      contentType = 'multipart/form-data';
      break;

    default:
    case 'json':
      contentType = 'application/json';
      break;

    case 'text':
      contentType = 'text/plain';
      break;
  }

  return ({
    headers: {
      Accept: '*/*',
      'Content-Type': contentType,
      Authorization: 'Bearer ' + get_token(),
    },
  });
};

export { api, rest, baseUrl, config, set_token, get_token, get_user_info };