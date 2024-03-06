import axios from "axios";
import { BASE_URL } from "./constant";
import { onFetchError, onSuccess } from "./Messages/NotifyMessages";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const signUp = async (credentials) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/signup`, credentials);
    if (res) {
      setAuthHeader(res.access_token);
    }
    onSuccess("Success");
    return res;
  } catch (error) {
    onFetchError(`Error: ${error.message}`);
    return error.message;
  }
};

export const LogIn = async (credentials) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, credentials);
    if (res) {
      setAuthHeader(res.access_token);
    }
    onSuccess("Success");
    return res;
  } catch (error) {
    onFetchError(`Error: ${error.message}`);
    return error.message;
  }
};

export const changePassword = async (credentials) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/password-set`, credentials);
    if (res) {
      setAuthHeader(res.access_token);
    }
    onSuccess("Success");
    return res;
  } catch (error) {
    onFetchError(`Error: ${error.message}`);
    return error.message;
  }
};

export const forgotPassword = async (credentials) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/auth/password-reset`,
      credentials
    );
    onSuccess("Success");
    return res;
  } catch (error) {
    onFetchError(`Error: ${error.message}`);
    return error.message;
  }
};

export const LogOut = async () => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/logout`);
    if (res) {
      clearAuthHeader();
    }
    onSuccess("Success");
    return res;
  } catch (error) {
    onFetchError(`Error: ${error.message}`);
    return error.message;
  }
};

export const accessToken = async () => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/access-token`);
    if (res) {
      setAuthHeader(res.access_token);
    }
    onSuccess("Success");
    return res;
  } catch (error) {
    onFetchError(`Error: ${error.message}`);
    return error.message;
  }
};

export const refreshToken = async () => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/refresh-token`);
    if (res) {
      setAuthHeader(res.access_token);
    }
    onSuccess("Success");
    return res;
  } catch (error) {
    onFetchError(`Error: ${error.message}`);
    return error.message;
  }
};
