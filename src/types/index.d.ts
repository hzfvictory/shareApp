/**
 * dva异步方法调用
 */
declare namespace API {
  //http请求结果
  export interface Response {
    data: ResponseData,
    errMsg: string,
    statusCode: number,
    header: any
  }

  //API接口返回数据
  export interface ResponseData {
    code: number;
    data: any;
    status: string;
  }

  export interface Error extends ErrorConstructor {
    code: number;
    text: string;
    data: any;
    status: string;
  }
}


type IDispatch = (object: { type: string, payload?: object, cb?: (res: API.ResponseData) => void }) => void;

interface IEffectsAction {
  //参数
  payload?: any;
  id?: String | Number;
  type?: String;
  //回调
  cb?: (res?: API.ResponseData | boolean) => void;
}
