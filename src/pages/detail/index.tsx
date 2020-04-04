import Taro, {Component, Config} from '@tarojs/taro'
import {View, RichText} from '@tarojs/components'
// @ts-ignore
import AD from "@/components/Guide"


import "./index.scss"


interface IState {
  title: string,
  nodes: string
}

export default class Index extends Component<IState> {

  config: Config = {
    navigationBarTitleText: '详情页面'
  };
  state: IState = {
    title: "",
    nodes: "<p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/nNNkRnVJMW6SIyYHT7ZXxFxtQU4%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"><span style=\"font-size:15px\"><span style=\"line-height:1.5\"><span style=\"letter-spacing:1px\">夜晚的百翠山居寂静清凉，偶尔听到几声蛙鸣。早起推开房门，打开客厅的窗帘，阳光和嫩绿立即洒了一地，心情愉悦。</span></span></span></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/jydfEkzz1jkz45jSv91tSlIG1fo%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"><span style=\"font-size:15px\"><span style=\"line-height:1.5\"><span style=\"letter-spacing:1px\">房间里的每一处摆设，仿佛都能看见设计者的用心。这是真正可以返璞归真，不打扰世界，也不被世界打扰，追求至静至纯的好去处。</span></span></span></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/e6LrAJYAL4HK%2Fwo1usEqF5mDrxM%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"><span style=\"font-size:15px\"><span style=\"line-height:1.5\"><span style=\"letter-spacing:1px\">昨天阴沉了一天，今天倏地亮了起来。走出院子，竹林在清晨的阳光下娇翠欲滴。</span></span></span></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/l9xb0EkJzWbLtumVhrU%2F3SMPUmM%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"><span style=\"font-size:15px\"><span style=\"line-height:1.5\"><span style=\"letter-spacing:1px\">所在的院落叫做平安村，百翠山居还有两处院落，分别是稻香村和莲花村。</span></span></span></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/wchL1JmSPI04gYko0hz72lrmwe8%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/R60nPx%2Fk9rj8pSKBqRNp9HDKmpM%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"><span style=\"font-size:15px\"><span style=\"line-height:1.5\"><span style=\"letter-spacing:1px\">出得院门，依旧是清幽竹林小道。简单做了下热身，开始晨跑。</span></span></span></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/wda58pvxcI3o9m%2BYTjl4tCiAwFs%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"><span style=\"font-size:15px\"><span style=\"line-height:1.5\"><span style=\"letter-spacing:1px\">路过平安村的另一个入口，这里每栋房屋都有着诗意的名字。</span></span></span></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/uBH%2BzN2U0lUeKhyDRF7qUtLpPOg%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"><span style=\"font-size:15px\"><span style=\"line-height:1.5\"><span style=\"letter-spacing:1px\">蓝天绿树间，古朴的院落，倒映在清澈的湖水中，远望去，心旷神怡。</span></span></span></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/L%2BbNuuxhblUTQr3%2BCpH9%2B34bmcM%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"><span style=\"font-size:15px\"><span style=\"line-height:1.5\"><span style=\"letter-spacing:1px\">这里有小桥，流水，人家。感觉不到人工雕琢的痕迹，一切都与江南乡村自然融合在一起。</span></span></span></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/%2BZV5P3WNkHIUYmTtwGuVeKPr%2FyE%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/Xw60YdgA2jml29%2BEaSegV4MSzU8%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"><span style=\"font-size:15px\"><span style=\"line-height:1.5\"><span style=\"letter-spacing:1px\">路过莲花村，房屋隐藏在曲径通幽处。</span></span></span></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/4r%2BBCtlAUur8IioFKdkC29TcYis%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"><span style=\"font-size:15px\"><span style=\"line-height:1.5\"><span style=\"letter-spacing:1px\">百翠山居的浓墨重彩之处，是这个土圭垚。主人从景德镇复制了一座柴烧窑。在这里可以真正尝试拉坯、制瓷，感受匠人般的专注。</span></span></span></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/rZGCGfZRJT10uqQGJDoAz5oUBRs%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"><span style=\"font-size:15px\"><span style=\"line-height:1.5\"><span style=\"letter-spacing:1px\">除了有三处院落可以供客人居住，园内还有一片帐篷住宿区。</span></span></span></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/dlUtV%2FnLvuSaXgkYLzCR5H6jo%2B8%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"><span style=\"font-size:15px\"><span style=\"line-height:1.5\"><span style=\"letter-spacing:1px\">绕湖慢跑一圈，畅快淋漓。返回住处楠舍，偶见窗户上映衬着满园青绿。</span></span></span></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/WfPBtVdqxBg1Pa7oUNT3tPJWweY%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/soUQgW0lxt7a6%2Fw87kD5NqxNBNo%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"><span style=\"font-size:15px\"><span style=\"line-height:1.5\"><span style=\"letter-spacing:1px\">楠舍边有近水楼台，称为望亭。夜晚可登楼雅座，享私房美食。</span></span></span></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/hOLPf8Pja3TdFBayo4yG1YAugkw%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"><span style=\"font-size:15px\"><span style=\"line-height:1.5\"><span style=\"letter-spacing:1px\">屋边湖水微波荡漾，野鸭嬉戏，小鱼儿时而越出水面，闪烁着银亮的鱼腹。待下次再来，垂钓一回如何？</span></span></span></p><p style=\"text-indent:2em;\"></p><div class=\"media-wrap image-wrap\"><img src=\"http://aituwen.qiniudn.com/x84YLT5ZfPjGL6LyUry%2Ff5GP594%3D?imageView2/2/w/1280/interlace/1\" width=\"480px\" style=\"width:480px\"/></div><p style=\"text-indent:2em;\"></p><p style=\"text-indent:2em;\"><span style=\"font-size:15px\"><span style=\"line-height:1.5\"><span style=\"letter-spacing:1px\">百翠山居里稻谷芳香，鸭鹅成群，还有温室无土有机栽培蔬菜。早餐的食材亦都来自园中，纵是平常之物，也显得清新脱俗。</span></span></span></p>"

  };

  componentDidMount(): void {
    const {title} = this.$router.params;

    this.setState({
      title
    })
  }


  render() {
    const {title, nodes} = this.state;
    return (
      <View>
        <AD/>
        <View className={'rich-text'}>
          {/*<Empty title={title}/>*/}
          {/*<View dangerouslySetInnerHTML={{__html: nodes}} />*/}
          <RichText nodes={nodes} space='ensp'/>
        </View>
      </View>

    )
  }
}
