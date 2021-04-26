import React from 'react';
import { EachTileWrap, EachTileTextWrap } from './OurUsers.styled';
import assets from '../../Assets';

const EachTile = ({ users, setState }) => {

    const handleChange = (image, country, name) => {
        setState({
            image: image,
            country:country,
            name: name
        })
    }

    return (
        users.map(val => (
            <EachTileWrap onClick = {()=>handleChange(val.image, val.country, val.name)}>
                <div style = {{width: "30%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img src={val.image} style={{ borderRadius: "50%", width: "30px", height: "30px" }} />
                </div>
                <EachTileTextWrap>
                    <p style = {{margin: "2px", fontWeight: "500"}}>
                        {val.name}
                    </p>
                    <p style = {{margin: "2px", color: "#E5E4E3"}}>
                        {val.country}
                    </p>
                </EachTileTextWrap>
            </EachTileWrap>
        ))
    )
}

export default EachTile;