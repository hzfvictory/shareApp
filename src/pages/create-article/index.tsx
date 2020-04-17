import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text, Editor} from '@tarojs/components'
import "./index.scss"

export default class Index extends Component {

  config: Config = {
    navigationBarTitleText: '添加文章'
  };

  onReady = () => {
    console.log('编辑器初始化完成时触发');
  };
  onFocus = () => {
    console.log('编辑器聚焦时触发');
  };
  onBlur = () => {
    console.log('编辑器失去焦点时触发');
  };

  render() {
    return (
      <View style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        marginTop: '100px'
      }}
      >
        <Editor
          className={'editor-content'}
          placeholder={'添加文章内容...'}
          showImgSize
          showImgToolbar
          showImgResize
          onReady={this.onReady}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />

        {/*<Text className={'about'}>如有侵权，请联系wx: hzfvlp 修正</Text>*/}
      </View>
    )
  }
}
