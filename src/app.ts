import { RequestConfig } from 'umi';

// 配置基于 https://github.com/umijs/umi-request 封装的 request 的配置
export const request: RequestConfig = {
    timeout: 10000,
    //   errorConfig: {},
    //   middlewares: [],
    //   requestInterceptors: [],
    responseInterceptors: [
        (response: any, options: any) => {
            return response
        }
    ],
    errorHandler : (error:any) =>{
        // 网路异常 非 200 响应码
        console.log('errorHandler='+error)
    }
};