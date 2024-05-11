import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Constant } from "./constant";

interface AxiosResponseData {
  detail: "OK" | "NOT_FOUND";
  result: any;
}

class Service {
  private axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      timeout: 15000,
      baseURL: baseUrl,
    });
    this.axiosInstance.interceptors.request.use((config: any) => {
      return config;
    });
    this.axiosInstance.interceptors.response.use((response: any) => {
      return response;
    });
  }

  public get<P>(
    url: string,
    params?: P
  ): Promise<AxiosResponse<AxiosResponseData>> {
    return this.axiosInstance.get(url, { params }).then((res) => {
      return res;
    });
  }
}
const api = {
  service: new Service(Constant.BASE_URL),
};

export { api };
