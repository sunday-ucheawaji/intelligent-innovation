import axios from "axios";
import { capitalizeFirstLetter } from "../utils";

const token = localStorage.getItem("token");
const TokenType = token
  ? capitalizeFirstLetter(localStorage.getItem("token_type") as string)
  : "Bearer";

const axiosInstance = axios.create({
  baseURL: "https://dev-api.gettonote.com/api/v1/",
  headers: {
    "Content-type": "application/json",
    Authorization: `${TokenType} ${token}`,
  },
});

class APIClient<T, K> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (): Promise<K> => {
    return axiosInstance.get<K>(this.endpoint).then((res) => res.data);
  };

  getAll = (): Promise<T[]> => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  post = (data: T): Promise<K> => {
    return axiosInstance.post<K>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
