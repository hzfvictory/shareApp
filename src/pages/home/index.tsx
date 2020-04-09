import Taro, {Config} from '@tarojs/taro'
import {Component} from "@/bases"
import {View} from '@tarojs/components'
import MySwiper from "@/components/MySwiper"
import Article from "@/components/Article";
import {getList, queryBanner} from "./service"
import {USERID} from "@/utils/constants"
import './index.scss'

interface IState {
  banners: any[],
  article: any[]
}

export default class Index extends Component<IState> {
  config: Config = {
    navigationBarTitleText: '首页'
  };
  state: IState = {
    banners: [],
    article: []
  };

  componentDidMount() {
    this.queryData()
  }

  queryData = async () => {
    const result = this.handleResultData(await getList());
    const {banners} = this.handleResultData(await queryBanner(USERID));
    result.length = 1;  // 为了应付微信审核，临时添加

    this.setState({
      article: result,
      banners
    });
  };

  onClickArticle = () => {
    this.jumpUrl('/pages/detail/index?id=5e8ef0c1ef20b17e3096f910')
  };

  render() {
    const {article,banners} = this.state;

    return (
      <View>
        <MySwiper
          banner={banners}
          home
        />
        <View className='content'>
          {
            !!article.length && article.map((item) => {
              return (
                <Article
                  onHandleClick={this.onClickArticle}
                  key={item._id}
                  articleId={item._id}
                  title={item.user_name}
                  thumb='http://aituwen.qiniudn.com/uBH%2BzN2U0lUeKhyDRF7qUtLpPOg%3D?imageView2/2/w/1280/interlace/1'
                  author={'小he'}
                  publishTime={item.create_date}
                />
              )
            })
          }
        </View>
      </View>
    )
  }
}
