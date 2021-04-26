import styled from 'styled-components';

export const OurUserWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 60%;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #fff;
    padding-top: 10px;
    margin: 68px 0px 30px 0px;
    border-radius: 3px !important;
    border: 1px solid #ced9e4;
    @media only screen and (max-width: 600px) {
        margin: 10px 10px 30px 10px;
    }
`;

export const EachTileWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 60px;
    cursor: pointer;
`;

export const EachTileTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    @media only screen and (max-width: 600px) {
        width: 90%;
    }
`;