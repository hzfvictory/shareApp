import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import {AtDivider} from 'taro-ui'
import './index.scss'

interface TProps {
  onHandleClick: () => void,
  thumb?: string,
  author: string,
  title: string,
  publishTime: string,
  articleId: number | string
}

export default class Index extends Component<TProps> {

  static options = {
    addGlobalClass: true
  };

  render() {
    const {thumb, onHandleClick, title, author, publishTime} = this.props;
    return (
      <View className='article' onClick={onHandleClick}>
        {/*文章内容*/}
        <View className='at-row'>
          {/*图片*/}
          <View>
            {
              thumb == null ?
                <Image className='article-thumb'
                       src='https://imgssl.justcome.cn/Fs_QMcioOUnMxoFH0Uckowl_QPRW?imageView2/2/w/640/interlace/1'
                /> :

                <View className='hex'>
                  <View className='hexIn'>
                    <View className='hexLink'>
                      <Image mode={'aspectFit'} src={thumb}  className={'hex-img'}/>
                    </View>
                  </View>
                </View>
            }
          </View>
          <View className='article-content'>
            {/*标题*/}
            <View className='at-col article-title'>{title}</View>
            {/*标签*/}
            <View className='article-tag'>
              <View className='author-view'>
                <View className='at-icon at-icon-user'/>
                <Text className='author'>{author}</Text>
              </View>
              <View className='publish-view'>
                <View className='at-icon at-icon-calendar'/>
                <Text className='publish-date'>{publishTime}</Text>
              </View>
            </View>
          </View>
        </View>
        <AtDivider height='5Px' lineColor='#e0e0e0'/>
      </View>
    )
  }
}
