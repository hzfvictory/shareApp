declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";
declare module "taro-parse";

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt';
    [key: string]: any;
  }
};

declare const wx: {
  startLocationUpdateBackground(OBJECT?: {
    complete: () => void
  });
  startLocationUpdate(OBJECT?: {
    complete: () => void
  });
  onLocationChange(fn?: (any) => any)
};

