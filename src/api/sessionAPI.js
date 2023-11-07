import axios from "./axios";

const SIGNUP_URL = '/auth/signup'

export const createUser = async(payload) => {
  try {
    const response = await axios.post(SIGNUP_URL, payload);
    return response.data;
  } catch(error) {
    console.log(error)
  }
}
