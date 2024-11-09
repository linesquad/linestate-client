import axios from "axios";

const apiReq = axios.create({
  baseURL: "http://localhost:8001/api",
  withCredentials: true,
});

export default apiReq;
