import Taro, {Component} from '@tarojs/taro';
import {Swiper, SwiperItem, Image} from '@tarojs/components';
import PropTypes from 'prop-types';
import {jumpUrl} from "../../utils/router";

import './index.scss';

export default class Index extends Component {

  static propTypes = {
    banner: PropTypes.array,
  };
  static defaultProps = {
    banner: [],
  };
  // 点击banner跳转
  handleJumpUrl = (url) => () => {
    if (!url) return;
    jumpUrl(url)
  };

  render() {
    const {banner, jump, stys} = this.props;


    return (
      <Swiper
        className={'swiper-container'}
        style={stys}
        indicatorDots
        indicatorColor='#999'
        indicatorActiveColor='#bf708f'
        autoplay
        circular
        easingFunction={'easeInOutCubic'}
      >
        {
          banner.map((item, index) => (
            <SwiperItem key={index}>
              <Image onClick={this.handleJumpUrl(item[jump])} mode='widthFix' className='img_banner'
                     src={item.url}
              />
            </SwiperItem>
          ))
        }
      </Swiper>
    );
  }
}
