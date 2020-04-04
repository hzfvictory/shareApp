/**
 * Author: hzf;
 * Date: 2019-07-16 16:59;
 * Description:Taro添加Dva
 */
import Taro from '@tarojs/taro';
import {create} from 'dva-core';
import createLoading from 'dva-loading';
import models from '../models';


let app: any;
let store: any;
let dispatch: any;

function createApp(opt?: any): void {
  app = create(opt);
  app.use(createLoading({}));

  // 适配支付宝小程序
  if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
    global = {} as any;
  }
  // @ts-ignore
  if (!global.registered) opt.models.forEach(model => app.model(model));
  // @ts-ignore
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  //@ts-ignore
  //在小程序报错，暂时取消
  //window.g_app = app;

  return app;
}

const dvaApp = createApp({
  initialState: {},
  models: models,
}) as any;


const stores = dvaApp.getStore();

export default stores

