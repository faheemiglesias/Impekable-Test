import { React } from 'react';
import { TopViewWrap } from './TopView.styled';
import assets from '../../Assets';
import { Menu, Dropdown, Button } from 'antd';

const TopView = ({ setToggle, toggle }) => {

    const menu = (
        <Menu>
            <Menu.Item key="1">
                Profile
          </Menu.Item>
            <Menu.Item key="2">
                Edit
                </Menu.Item>
        </Menu>
    );

    return (
        <TopViewWrap>
            <img
                src={assets.images.humberger}
                alt=""
                style={{ width: "33px", height: "33px", marginLeft: "20px", cursor: "pointer" }}
                onClick={() => setToggle(!toggle)} />
                <div style = {{display: "flex", alignItems: "center", marginRight: "25px"}}>
                    <img src = {assets.images.notification} style = {{height: "18px", width: "22px", borderRight: "2px solid #fcfcfd"}} />
                <Dropdown overlay={menu}>
                        <Button style={{ display: "flex", border: "none", color: "#4B5563", alignItems: "center" }}>
                            {/* <img src={assets.images.vector} style={{ margin: "0px 8px 0px 0px", width: "18px", height: "18px" }} /> */}
                            <div>
                                {"John Doe"}
                            </div>
                        </Button>
                    </Dropdown>
                    <img src = {assets.images.user1} style = {{width: "22px", height: "22px", borderRadius: "50%"}} />
                </div>
        </TopViewWrap>
    )
}

export default TopView;