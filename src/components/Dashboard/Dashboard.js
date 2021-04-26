import React from 'react';
import Statistics from '../Statistics';
import SalesDistribution from '../SalesDistribution';
import { DashWholeWrap, FirstDashLayer, FirstDashWholeLayer, SecondDashWholeLayer } from './Dashboard.styled';
import Referer from '../Referer/Referer';
import OurUsers from '../OurUsers/OurUsers';
import ProductVideo from '../ProductVideo/ProductVideo';

const Dashboard = () =>{
    return(
        <DashWholeWrap>
            <FirstDashWholeLayer>
                <p style = {{margin: "0px", padding: "0px 0px 20px 0px", color: "#43425d"}}>Overview</p>
            <FirstDashLayer>
            <Statistics />
            <SalesDistribution />
            </FirstDashLayer>
            <Referer />
            </FirstDashWholeLayer>
            <SecondDashWholeLayer>
                <OurUsers />
                <ProductVideo />
            </SecondDashWholeLayer>
        </DashWholeWrap>
    )
}

export default Dashboard;
