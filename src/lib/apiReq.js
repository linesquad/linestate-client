import axios from "axios";

const apiReq = axios.create({
  // baseURL: "http://localhost:8001/api",
  baseURL: "https://linestatetest-b8bc3b460ebf.herokuapp.com/api",
  withCredentials: true,
});

export default apiReq;
