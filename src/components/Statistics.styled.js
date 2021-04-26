import styled from 'styled-components';
import { ResponsiveContainer} from 'recharts';


export const StatisticsWrap = styled(ResponsiveContainer)`
    width: 45% !important;
    height: 300px !important;
    background-color: #fff;
    border-radius: 3px !important;
    border: 1px solid #ced9e4;
    @media only screen and (max-width: 600px) {
        width: 90% !important;
    }
`;