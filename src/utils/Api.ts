import axios, { AxiosInstance, AxiosResponse } from "axios";

export const api: AxiosInstance = axios.create({
    baseURL: `http://localhost:8080/api/v1`,
    headers: {},
    withCredentials: false,
    timeout: 30000
});

export const getResponseData = (response: AxiosResponse, transformer = (data: any) => data) => {
    if ((response.status === 200 || response.status === 201) && response.data) {
        return transformer(response.data.data);
    } else {
        //TODO: throw error
    }
};
