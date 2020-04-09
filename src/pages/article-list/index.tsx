import Taro, {Config} from '@tarojs/taro'
import {Component} from "@/bases"
import {View} from '@tarojs/components'
import Article from "@/components/Article";
import Empty from "@/components/Empty";
import {getArticleList} from "./service"


interface IState {
  article: any[],
  c_id: string,
  isLoading: boolean
}

export default class Index extends Component<IState> {
  config: Config = {
    navigationBarTitleText: '首页'
  };
  state: IState = {
    article: [],
    c_id: '',
    isLoading: true
  };

  componentDidMount() {
    const {id, value} = this.$router.params;
    this.config.navigationBarTitleText = value;

    this.setState({
      c_id: id
    }, () => {
      this.queryData()
    })
  }

  queryData = async () => {
    this.setState({
      isLoading: true
    });
    const {c_id} = this.state;
    const result = this.handleResultData(await getArticleList(c_id));

    this.setState({
      article: result,
      isLoading: false
    });
  };

  onClickArticle = (id: string) => () => {
    this.jumpUrl('/pages/detail/index?id=' + id)
  };

  render() {
    const {article, isLoading} = this.state;

    return (
      <View style={{padding: 10}}>
        {
          !!article.length ?
            article.map((item) => {
              return (
                <Article
                  onHandleClick={this.onClickArticle(item._id)}
                  key={item._id}
                  articleId={item._id}
                  title={item.title}
                  thumb={item.cover_key}
                  author={item.nickname}
                  publishTime={item.create_date}
                />
              )
            }) :
            !isLoading && <Empty/>
        }
      </View>
    )
  }
}
