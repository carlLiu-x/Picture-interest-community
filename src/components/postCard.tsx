import react from 'react';
import '../css/mainPage.css';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

class PostCard extends react.Component {
    constructor(props:any){
        super(props);
        this.state = {


        }
    }
    
    render(): react.ReactNode {
        return(
            <Card
            style={{ width: 500,display:'inline-block'}}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
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
          </Card>
        );
    }

}

export default PostCard;