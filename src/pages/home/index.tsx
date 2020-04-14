import Taro, {Config} from '@tarojs/taro'
import {Component} from "@/bases"
import {View} from '@tarojs/components'
import MySwiper from "@/components/MySwiper"
import Article from "@/components/Article";
import {queryBanner, queryArticleList} from "./service"
import {USERID} from "@/utils/constants"
import './index.scss'

interface IState {
  banners: any[],
  article: any[]
}

export default class Index extends Component<IState> {
  config: Config = {
    navigationBarTitleText: '首页',
    navigationStyle: "custom",
    enablePullDownRefresh: true
  };
  state: IState = {
    banners: [],
    article: []
  };

  componentDidMount() {
    this.queryData()
  }

  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '首页',
      path: this.$router.path
    }
  }

  onPullDownRefresh = () => {
    Taro.vibrateShort();
    this.queryData()
  };

  stopPullDownRefresh = () => {
    Taro.stopPullDownRefresh();
  };

  queryData = async () => {
    const result = this.handleResultData(await queryArticleList(USERID));
    const {banners} = this.handleResultData(await queryBanner(USERID));
    this.setState({
      article: result,
      banners
    }, () => {
      this.stopPullDownRefresh()
    });
  };

  onClickArticle = (item) => () => {
    this.jumpUrl(`/pages/detail/index?id=${item._id}&title=${item.title}`)
  };

  render() {
    const {article, banners} = this.state;

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
                  onHandleClick={this.onClickArticle(item)}
                  key={item._id}
                  articleId={item._id}
                  title={item.title}
                  thumb={item.cover_key}
                  author={item.nickname}
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
