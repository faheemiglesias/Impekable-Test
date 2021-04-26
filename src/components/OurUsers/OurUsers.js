import React, { useState } from 'react';
import { OurUserWrap } from './OurUsers.styled';
import assets from '../../Assets';
import EachTile from './EachTile';

const OurUsers = () => {
    const [state, setState] = useState({
        image: assets.images.user1,
        name: "Nick Herasimenka",
        country: "United States"
    });
    console.log("USERS", state)
    const users = [{ image: assets.images.user1, country: "United States", name: "Nick Herasimenka" },
    { image: assets.images.user2, country: "United States", name: "Drew James" },
    { image: assets.images.user3, country: "United States", name: "Bavid Kames" },
    { image: assets.images.user1, country: "United States", name: "Lavid Emes" }];
    return (
        <OurUserWrap>
            <img src={state.image} style={{ borderRadius: "50%", width: "85px", height: "90px" }} />
            <p style={{margin: "8px 2px 2px 2px"}}>{state.name}</p>
            <p style = {{margin: "2px", color: "#E5E4E3"}}>{state.country}</p>
            <img src={assets.images.userIcons} style={{ width: "100%", cursor: "pointer" }} />
            <EachTile setState={setState} users={users} />
        </OurUserWrap>
    )
}

export default OurUsers;