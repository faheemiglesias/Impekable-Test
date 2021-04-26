import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import TopView from './components/TopView/TopView';
import SideNav from './components/SideNav/SideNav';
import UiView from './screens/UiView/UiView';
import { AppWrap, FirstLayer, SecondLayer, TopWrap, ViewWrap } from './App.styled';

function App() {

  const [toggle, setToggle] = useState(false);

  return (
    <AppWrap>
      <FirstLayer toggle = {toggle}>
        <SideNav toggle = {toggle}/>
      </FirstLayer>
      <SecondLayer>
        <TopWrap>
          <TopView setToggle = {setToggle} toggle = {toggle}/>
        </TopWrap>
        <ViewWrap>
          <UiView />
        </ViewWrap>
      </SecondLayer>
    </AppWrap>
  );
}

export default App;
