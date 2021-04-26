import React from 'react';
import { ProductVideoWrap } from './ProductVideo.styled';
import assets from '../../Assets';

const ProductVideo = () =>{
    return(
        <ProductVideoWrap>
            <img src = {assets.images.video} style = {{height: "100%", width: "100%", objectFit: "cover"}}/>
        </ProductVideoWrap>
    )
}

export default ProductVideo;