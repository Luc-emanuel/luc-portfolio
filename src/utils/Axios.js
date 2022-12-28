import axios from "axios";

export default axios.create({
  baseURL: "https://my-api-mensagens.herokuapp.com",
  responseType: "json",
});
