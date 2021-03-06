import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { SalesDistributionWrap } from './SalesDistribution.styled';

const SalesDistribution = () => {


    return (
        <SalesDistributionWrap>
            <PieChart
                lineWidth={50}
                radius={40}
                data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                ]}
            />
        </SalesDistributionWrap>
    )
}

export default SalesDistribution;