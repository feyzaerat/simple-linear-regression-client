import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/linear-regression/",
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);
export default axiosInstance;
