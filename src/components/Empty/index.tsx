import Taro from '@tarojs/taro';
import {View, Image} from '@tarojs/components';
import "./index.scss"

interface IProps {
  title?: string,
  icon?: string,
  center?: boolean
}

const Index = (props: IProps) => {
  const {icon, title} = props;
  return (
    <View className='empty'>
      <Image className='icon' src={icon ? icon : 'https://pic.rmb.bdstatic.com/3177b658259c49b9f456b68a91bf4602.jpeg'}/>
      {title && <View className='title'>{title}</View>}
      <View className='info'>{this.props.children}</View>
    </View>
  );
};
Index.defaultProps = {
  title: '这城市那么空',
  center: false
};

export default Index

