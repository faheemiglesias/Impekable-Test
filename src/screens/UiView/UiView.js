import {React} from 'react';
import { UiViewWrap } from './UiView.styled';
import Dashboard from '../../components/Dashboard/Dashboard';

const UiView = () =>{
    return (
        <UiViewWrap>
            <Dashboard/>
        </UiViewWrap>
    )
}

export default UiView;