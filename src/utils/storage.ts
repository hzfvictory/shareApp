/**
 * Author: hzf;
 * Date: 2019-07-16 16:08;
 * Description:存储的方法
 */

import Taro from "@tarojs/taro";

export const token = (): string => Taro.getStorageSync('token') || '';
export const userInfo = (): string => Taro.getStorageSync('userInfo') || {};


