import axios from "axios";

const apiReq = axios.create({
  // baseURL: "http://localhost:8000/api",
  baseURL: "https://linestatetest-b8bc3b460ebf.herokuapp.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiReq;
