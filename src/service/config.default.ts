/**
 * Author: hzf;
 * Date: 2019-07-16 16:49;
 * Description:一些配置项,和状态码
 */

export const DEVURL = "https://www.jing999.cn";//测试服务器
export const PRODUCTURL = "https://www.jing999.cn"; // 生产环境，线上服务器
export const MOCKHOST = "https://www.easy-mock.com/mock/5d5227e2d981d40171ed9808"; //Easy Mock 模拟接口数据

export const BASE_URL: string = process.env.NODE_ENV === "development" ? DEVURL : PRODUCTURL;
export const PREFIX = "/api";

export const HTTP_ERROR: any = {
  '400': '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  '401': '用户没有权限（令牌、用户名、密码错误）。',
  '403': '用户得到授权，但是访问是被禁止的。',
  '404': '请求不存在',
  '406': '请求的格式不可得。',
  '410': '请求的资源被永久删除，且不会再得到的。',
  '422': '当创建一个对象时，发生一个验证错误。',
  '500': '服务器发生错误，请检查服务器。',
  '502': '网关错误。',
  '503': '服务不可用，服务器暂时过载或维护。',
  '504': '网关超时。',
};

