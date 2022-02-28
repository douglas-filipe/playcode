import axios from "axios";
export const local = "http://localhost:3000";
export const deploy = "https://playcodeapi.herokuapp.com";

const api = axios.create({
  baseURL: deploy,
});

export default api;
