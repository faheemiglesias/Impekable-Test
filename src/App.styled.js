import styled from 'styled-components';

export const AppWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

export const FirstLayer = styled.div`
    display: flex;
    width: ${props => (props.toggle ? "5%" : "18%")};
`;

export const SecondLayer = styled.div`
    display: flex;
    flex-direction: column;
    width: 82%;
    @media only screen and (max-width: 600px) {
        width: 100% !important;
    }
`;

export const TopWrap = styled.div`
    display: flex;
    width: 100%;
    height: 3.5rem;
    background-color: #43425d;
`;

export const ViewWrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #f0f0f7;
`;  