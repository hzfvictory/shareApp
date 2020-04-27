import Taro, {Config} from '@tarojs/taro'
import {Component} from "@/bases"
import {View, Image} from '@tarojs/components'
import MySwiper from "@/components/MySwiper"
import Article from "@/components/Article";
import {queryBanner, queryArticleList} from "./service"
import {USERID} from "@/utils/constants"
import searchBar from "@/assets/img/searchBar.png"
import './index.scss'

interface IState {
  banners: any[],
  article: any[],
  batTop: boolean,
  barHeight: number,
}

export default class Index extends Component<IState> {
  config: Config = {
    navigationBarTitleText: '首页',
    navigationStyle: "custom",
    enablePullDownRefresh: true
  };
  state: IState = {
    banners: [],
    article: [],
    batTop: false,
    barHeight: 0
  };

  componentDidMount() {
    // 获取状态栏的高度
    Taro.getSystemInfo({
      success: res => {

        this.setState({
          barHeight: res.statusBarHeight
        });
      }
    });
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

  onPageScroll(res) {
    if (res.scrollTop > 100) {
      this.setState({
        batTop: true
      })
    }
    if (res.scrollTop === 0 && this.state.batTop) {
      this.setState({
        batTop: false
      })
    }
  }

  onPullDownRefresh = () => {
    this.setState({
      batTop: false
    });
    Taro.vibrateShort();
    this.queryData()
  };

  stopPullDownRefresh = () => {
    Taro.stopPullDownRefresh();
  };

  queryData = async () => {
    this.showNavigationBarLoading();

    const result = this.handleResultData(await queryArticleList(USERID));
    const {banners} = this.handleResultData(await queryBanner(USERID));
    this.setState({
      article: result,
      banners
    }, () => {
      this.stopPullDownRefresh();
      this.hideNavigationBarLoading();
    });
  };

  onClickArticle = (item) => () => {
    this.jumpUrl(`/pages/detail/index?id=${item._id}&title=${item.title}`)
  };

  jumpSearch = () => {
    this.jumpUrl('/pages/search-list/index')
  };

  render() {
    const {article, banners, batTop, barHeight} = this.state;
    const {height: boundHeight, top} = this.getMenuButtonBoundingClientRect();

    const contentWeapp = {
      paddingTop: process.env.TARO_ENV !== 'h5' ? 210 - 100 + 10 + 10 + 'px' : '20px'
    };


    return (
      <View>
        <View className='barBox' style={{background: batTop ? "#fafafa" : 'transparent'}}>
          <View className='searchBtn' style={{paddingTop: barHeight + 'px'}} onClick={this.jumpSearch}>
            <Image className={'searchBar'} src={searchBar}/>
          </View>
        </View>

        {
          process.env.TARO_ENV === 'h5' ?
            <MySwiper
              banner={banners}
              jump={'jump_url'}
            /> :
            <View className={'filter-blur'}
                  style={{paddingTop: boundHeight + top + 10 + 'px', height: boundHeight + top + 100 + 'px'}}
            >
              <MySwiper
                banner={banners}
                jump={'jump_url'}
                stys={{width: 'calc(100vw - 20px)'}}
              />
            </View>
        }

        <View className='content' style={contentWeapp}>
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
