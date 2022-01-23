import React,{useState} from 'react';
import '../css/mainPage.css';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Image} from 'antd';
import '../css/postCard.css';


const { Meta } = Card;

class PostCard extends React.Component {
    constructor(props:any){
        super(props);
        this.state = {


        }
    }

    render(): React.ReactNode {
        return(
            <Card
            style={{ width: 650,display:'inline-block'}}
            // cover={
            //   <img
            //     alt="example"
            //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            //   />
            // }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
            {/* <Album className='Album'></Album> */}
            <Image width={650} className='post_picture' preview={false}  height={400} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
            
          </Card>
      
        );
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

