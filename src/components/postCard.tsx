//帖子的预览界面
//输出 PostCard
import React,{useState} from 'react';
import '../css/mainPage.css';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Image} from 'antd';
import '../css/postCard.css';
import PostCardD from './postCard_detailed';


const { Meta } = Card;

class PostCard extends React.Component<any,any> {
  public childRef:any = React.createRef();  
  constructor(props:any){
        super(props);
        this.state = {
          isActive : false,
          postInformation:this.props.postInformation
        }
       

    }

    render(): React.ReactNode {
      console.log("postcard" + this.props.UserProfile)
        return(
          <div>
            <Card
            style={{ width: 650,display:'inline-block'}}
            cover={
              <img
                
                src={this.props.pictureUrl}
                onClick={this.showModal}
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src= {this.props.UserProfile} />}
              title="Card title"
              description="#feed"
            />
            {/* <Album className='Album'></Album> */}
            {/* <Image width={650} className='post_picture' preview={false}  height={400} onClick={this.showModal}  src= {this.props.pictureUrl}/> */}
            
          </Card>
          <PostCardD onRef={this.onChildRef}></PostCardD>
          </div>
      
        );
    }
    
    showModal = () =>{
      this.childRef.setVisible(this.state.postInformation);
      
    }
    onChildRef = (child:any) =>{
      this.childRef = child;
    }
  }

// function Album(props: any) {
//   const [visible, setVisible] = useState(false);
//   return (
//     <>
//       <Image
//         preview={{ visible: false }}
//         width={750}
//         height={500}
        
//         src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
//         onClick={() => setVisible(true)}
//       />
//       <div  className='Album'style={{ display: 'none' }}>
//         <Image.PreviewGroup  preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
//           <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
//           <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
//           <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
//         </Image.PreviewGroup>
//         <button>点击</button>
//       </div>
//     </>
//   );
// }

export default PostCard;