/**
 * Author: hzf;
 * Date: 2019-07-23 10:17;
 * Description:路由的方法
 */
import Taro from "@tarojs/taro";

const PAGE_LEVEL_LIMIT = 10;

interface IOptions {
  [x: string]: string;
}

/*路由的跳转*/
export const jumpUrl = (url: string, options = {} as IOptions) => {
  let pages: any[] = [];
  if (process.env.TARO_ENV !== 'h5') {
    pages = Taro.getCurrentPages();

  }
  let method = options.method || 'navigateTo';

  const tabList = [
    'pages/home/index',
    'pages/mine/index',
    'pages/topics/index'
  ];

  if (url) {
    if (tabList.findIndex(x => '/' + x == url) != -1) {
      Taro['switchTab']({
        url
      })
    } else if (method == 'navigateTo' && pages.length === PAGE_LEVEL_LIMIT) {
      Taro['redirectTo']({
        url
      });
    } else if (method == 'redirectTo') {
      Taro['redirectTo']({
        url
      });
    } else {
      Taro['navigateTo']({
        url
      });
    }
  }
};

/*问号传参的参数*/
export const queryURLParameter = (url) => {
  let regParam = /([^?&=#]+)=?([^?&=#]+)?/ig,
    obj = {};
  url.replace(regParam, (...arg) => {
    obj[arg[1]] = arg[2];
  });
  return obj;
};
/*获取当前页url*/
export const getCurrentPageUrl = (): string => {
  if (process.env.TARO_ENV === 'h5') {
    return window.location.pathname
  }
  let pages = Taro.getCurrentPages();

  if (process.env.TARO_ENV === 'tt') {
    return pages[pages.length - 1]['__route__']
  }

  let currentPage = pages[pages.length - 1];
  return currentPage.route;
};
