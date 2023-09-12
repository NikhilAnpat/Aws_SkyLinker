import axios from "axios";

export default axios.create({
    baseURL: 'http://3.108.40.196:8080/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });