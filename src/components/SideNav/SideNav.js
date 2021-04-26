import { React } from 'react';
import { SideNavWrap, NavHead, EachNavBlock, EachNavBlockWrap } from './SideNav.styled';
import assets from '../../Assets';

const SideNav = ({ toggle }) => {

    const navData = [
        { id: "1", name: "Home", image: assets.images.home },
        { id: "2", name: "Dashboard", image: assets.images.statistics },
        { id: "3", name: "Inbox", image: assets.images.inbox },
        { id: "4", name: "Products", image: assets.images.products }
    ];

    return (
        <SideNavWrap>
            <NavHead toggle={toggle}>
                Impekable
            </NavHead>
            {navData.map((val, key) => (
                <EachNavBlockWrap>
                    <img src={val.image} style = {{width: "18px", height: "20px", marginRight: "7px"}}/>
                    <EachNavBlock toggle={toggle}>
                        {val.name}
                    </EachNavBlock>
                </EachNavBlockWrap>

            ))}
        </SideNavWrap>
    )
}

export default SideNav;