import styled from 'styled-components';

export const TableWholeWrap = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 90%;
    border-radius: 3px !important;
    border: 1px solid #ced9e4;
    @media only screen and (max-width: 600px) {
        width: auto;
    }
`;

export const TableHead = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 15px 5px 10px 5px;
    color: #43425d;
`;

export const TableSecond = styled.div`
    display: flex;
    flex-direction: row;
    background: #e4eaf1;
    height: 50px;
    padding: 5px;
    margin: 5px;
`;

export const TableThirdWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px;
`;

export const TableThird = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
`;

export const EachBox = styled.div`
    display: flex;
    align-items: center;
    width: 15%;
    font-size: 11px;
`;