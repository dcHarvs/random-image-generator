import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://picsum.photos",
});

export default axiosClient;
