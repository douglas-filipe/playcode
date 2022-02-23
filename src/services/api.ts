import axios from "axios";
const local = "http://localhost:3000";
const deploy = "https://playcodeapi.herokuapp.com";

const api = axios.create({
  baseURL: local,
});

export default api;
