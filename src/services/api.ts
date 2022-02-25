import axios from "axios";
export const local = "http://localhost:3001";
export const deploy = "https://playcodeapi.herokuapp.com";

const api = axios.create({
  baseURL: deploy,
});

export default api;
