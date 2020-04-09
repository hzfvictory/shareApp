import Taro, {Component} from '@tarojs/taro';
import {Swiper, SwiperItem, Image} from '@tarojs/components';
import PropTypes from 'prop-types';

import './index.scss';

export default class Index extends Component {

  static propTypes = {
    banner: PropTypes.array,
    home: PropTypes.bool,
  };
  static defaultProps = {
    banner: [],
    home: false,
  };

  render() {
    const {banner, home} = this.props;
    return (
      <Swiper
        className={!home ? 'swiper-container' : 'swiper'}
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
              <Image mode='widthFix' className='img_banner' src={item.url}/>
            </SwiperItem>
          ))
        }
      </Swiper>
    );
  }
}
