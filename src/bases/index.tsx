/**
 * Author: hzf;
 * Date: 2019-09-11 15:49;
 * Description:Taro底层框架的封装
 */
import Taro from '@tarojs/taro'
import {jumpUrl, queryURLParameter, getCurrentPageUrl} from "@/utils/router"
import {handleResultData, setTitle} from "@/utils/lodash"

interface IProps {
  dispatch: IDispatch;
}

// eslint-disable-next-line import/prefer-default-export
export class Component<P = {}, S = {}> extends Taro.Component<P & IProps, S> {
  public jumpUrl = jumpUrl;
  public queryURLParameter = queryURLParameter;
  public getCurrentPageUrl = getCurrentPageUrl;
  public handleResultData = handleResultData;
  public setTitle = setTitle;
  public showNavigationBarLoading = () => {
    process.env.TARO_ENV !== 'h5' && Taro.showNavigationBarLoading()
  };
  public hideNavigationBarLoading = () => {
    process.env.TARO_ENV !== 'h5' && Taro.hideNavigationBarLoading()
  };
  public getMenuButtonBoundingClientRect = (): Taro.getMenuButtonBoundingClientRect.Rect => {
    // @ts-ignore
    if (process.env.TARO_ENV === 'h5') return {};

    return Taro.getMenuButtonBoundingClientRect();
  }
}
