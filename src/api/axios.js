import axios from "axios";

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3000/api/v1',
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
})

export default instance
