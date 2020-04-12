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
