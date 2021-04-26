import styled from 'styled-components';

export const DashWholeWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

export const FirstDashWholeLayer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: space-between;
    margin: 25px 0px 50px 35px;
    @media only screen and (max-width: 600px) {
        margin: 10px;
        width: 90%;
    }
`; 

export const FirstDashLayer = styled.div`
    display: flex;
    flex-direction: row; 
    width: 100%;
    height: 50%;
    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }   
`;

export const SecondDashWholeLayer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    @media only screen and (max-width: 600px) {
        width: 80%;
    }
`;