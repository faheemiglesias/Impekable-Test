import styled from 'styled-components';

export const SideNavWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #43425d;
`;

export const NavHead = styled.div`
    display: ${props => (props.toggle ? "none" : "flex")};
    height: 3.5rem;
    width: 100%;
    background-color: #3b3b53;
    padding-left: 10px;
    align-items: center;
    color: #fff;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

export const EachNavBlockWrap = styled.div`
    display: flex;
    height: 3.5rem;
    width: 100%;
    padding-left: 10px;
    align-items: center;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #3b3b53;
    }
`;

export const EachNavBlock = styled.div`
    display: ${props => (props.toggle ? "none" : "flex")};
    @media only screen and (max-width: 600px) {
        display: none;
    }
`;