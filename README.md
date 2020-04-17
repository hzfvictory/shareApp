# 写实吧

Taro(v2.0.7) + dva-core + Typescript + Scss架构实例

<br/>

微信小程序好名字早被抢劫一空，
录用这个名字主要是因为名称简短，正好也想写资讯方面的，反正页面ui好看就行了

# 应用场景

发布一些旅游美景照片，读书心得，日常写实，学习方法，日常打卡等一些助于回忆和养成习惯的的事情。

## 本地运行

```shell script
git clone https://github.com/hzfvictory/shareApp.git
cd shareApp
yarn
yarn dev:weapp
```
然后用微信开发者工具打开 **`dist/weapp`**

## 小程序码

![](https://ae01.alicdn.com/kf/Hd9ba1f342e6d47bc81890f6ddf1b5c97P.jpg)

## H5预览版

[www.jing999.cn](https://www.jing999.cn)

## 服务端

暂不开源

## 适配进度

### [towxml](https://github.com/sbfkcel/towxml) && [wxParse](https://github.com/icindy/wxParse)

#### wxParse

停止维护，不支持表格展示，页面效果一般般

```javascript
// 在微信端，需要先拿到数据才能执行wxParse组件，否则不能展示
{
nodes && <ParseComponent
  article={nodes}
/>
}
```

#### towxml

兼容性比wxParse高，页面展示效果比较好，占内存大
