import Taro from "@tarojs/taro";

/**
 * Author: hzf;
 * Date: 2020-03-30 16:42;
 * Description:公共方法
 */

// 数据统一判断是否 200
export const handleResultData = (res?: any, cb?: () => {}) => {
  if (res.code === 200) {
    cb && cb();
    return res.data;
  }
  return []
};

export function setTitle(title: string) {
  title=decodeURIComponent(title);
  if (process.env.TARO_ENV === 'h5') {
    this.config.navigationBarTitleText = title;
  } else {
    Taro.setNavigationBarTitle({
      title
    });
  }
};
