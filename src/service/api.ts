import Taro from '@tarojs/taro'
import {BASE_URL, HTTP_ERROR} from "./config.default";
import {getCurrentPageUrl} from "@/utils/router";
import {token} from "@/utils/storage";

export default {
  request(options: any, method?: string) {
    let path = getCurrentPageUrl();
    const {url, data} = options;
    let contentType = "application/json";
    contentType = options.contentType || contentType;
    return new Promise((resolve, reject) => {
      let params: any = {
        url: `${BASE_URL}${url}`,
        data: data,
        method: method || 'GET',
        header: {
          'content-type': contentType,
          'Authorization': token(),
        }
      };

      Taro.request(params).then((res) => {
        // eslint-disable-next-line no-shadow
        let {statusCode, data} = res;

        if (statusCode >= 200 && statusCode < 300) {
          return resolve(data);
        } else {
          // 不合法的
          Taro.vibrateShort();
          if (statusCode === 401 || res.data.error === '未找到该管理员') {
            Taro.clearStorage();
            if (path !== "pages/home/list") {
              Taro.navigateTo({
                url: "/pages/home/list"
              });
            }
          }
          return new Error(
            // @ts-ignore
            console.log(statusCode, HTTP_ERROR[statusCode])
          )
        }
      }).catch(err => {
        reject('服务器正在维护中!');
        if (err.msg) throw new Error('服务器正在维护中!')
      })
    })
  },
  get(url: string, data?: any) {
    const params = {url, data};
    return this.request(params)
  },
  post(url: string, data?: any) {
    const params = {url, data};
    return this.request(params, 'POST');
  },
  put(url: string, data?: any) {
    const params = {url, data};
    return this.request(params, 'PUT')
  },
  delete(url: string, data?: any) {
    const params = {url, data};
    return this.request(params, 'DELETE')
  }
}
