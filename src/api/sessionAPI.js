import axios from "./axios";

const SIGNUP_URL = '/auth/signup'

export const createUser = async(payload) => {
  // const data = {
  //   firstName,
  //   lastName,
  //   email,
  //   password,
  // }
  console.log(payload)

  try {
    const response = await axios.post(SIGNUP_URL, payload);
    return response.data;
  } catch(error) {
    console.log(error)
  }
}
