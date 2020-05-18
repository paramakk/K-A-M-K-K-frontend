import {AxiosResponse} from "axios";

class MockAxios<ResponseDataType> {
    responseData: any;

    constructor(responseData: any = {}) {
        this.responseData = responseData;
    }

    private static createResponse = <T>(
        type: string,
        url: string,
        requestData: any,
        responseData: any,
        status: number = 200,
        statusText: string = "OK"
    ): Promise<AxiosResponse<T>> => {
        return new Promise(resolve => {
            setTimeout(() => {
                const response = new class implements AxiosResponse<T> {
                    config: any = {};
                    data: T = responseData;
                    headers: any = {};
                    request: any = {};
                    status: number = status;
                    statusText: string = statusText;
                }();

                console.debug("MOCK AXIOS REQUEST", {
                    type,
                    url,
                    requestData,
                    response
                });

                resolve(response);
            }, 0); //TODO: need timeout ?
        });
    };

    public get(url: string): Promise<AxiosResponse<ResponseDataType>> {
        return MockAxios.createResponse<ResponseDataType>("GET", url, null, this.responseData);
    }

    public post(url: string, data: any): Promise<AxiosResponse<ResponseDataType>> {
        return MockAxios.createResponse<ResponseDataType>("POST", url, data, this.responseData);
    }

    public patch(url: string, data: any): Promise<AxiosResponse<ResponseDataType>> {
        return MockAxios.createResponse<ResponseDataType>("PATCH", url, data, this.responseData);
    }

    public delete(url: string): Promise<AxiosResponse<ResponseDataType>> {
        return MockAxios.createResponse<ResponseDataType>("DELETE", url, null, this.responseData);
    }

    public put(url: string, data: any): Promise<AxiosResponse<ResponseDataType>> {
        return MockAxios.createResponse<ResponseDataType>("PUT", url, data, this.responseData, 201, "Created");
    }
}

export default MockAxios;
