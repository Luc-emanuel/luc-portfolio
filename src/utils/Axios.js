import axios from "axios";

export default axios.create({
  baseURL: "https://luc-apis.herokuapp.com/api_mensagens",
  responseType: "json",
});
