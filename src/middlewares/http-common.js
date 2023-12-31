import axios from "axios";

// const BASE_URL = "http://localhost:5500/api/v1";
const BASE_URL = "http://192.168.1.113:5500/api/v1";
// const BASE_URL = "http://192.168.1.109:5500/api/v1";

export default axios.create({ baseURL: BASE_URL });
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
