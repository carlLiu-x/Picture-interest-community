import React from 'react';
import '../css/postPictureCarousel.css';
import { Carousel,Image } from 'antd';
import {LeftOutlined,RightOutlined} from '@ant-design/icons'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class PostpictureCarousel extends React.Component<any, any>{
    private img: any;
    constructor(props:any){
        super(props);
        this.state={};
        this.img = undefined
    }
    prev(){
        this.img.prev();
    }
    next(){
        this.img.next();
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let {location} = this.props;
        return (
            <Layout className="picture-carousel">
                <Sider  theme = "light" width={50} className="picture-carousel-left-sider">
                <div className={"CarouselIcon"} onClick={this.prev.bind(this)}><LeftOutlined /></div>
                </Sider>
                <Sider  width={700} className="picture-carousel-mid-sider">
                <Carousel  className={'Carousel'} ref={dom => { this.img = dom; }} >
                    <div><img src={require('../icon/steamtest.png')} alt="" className="carousel_image_type"/></div>
                    <div><img src={require('../icon/airplane.png')} alt="" className="carousel_image_type"/></div>
                    <div><img src={require('../icon/home.png')} alt="" className="carousel_image_type"/></div>
                    <div><img src={require('../icon/love.png')} alt="" className="carousel_image_type"/></div>
                </Carousel>
                </Sider>
                <Sider theme = "light" width={50} className="picture-carousel-right-sider">
                <div className={"CarouselIcon"}  onClick={this.next.bind(this)}><RightOutlined /></div>
                </Sider>
            </Layout>
                    
        );
    }

}
export default PostpictureCarousel