import React from 'react';
import { MainPageStyled } from './MainPageStyled';
import PiperNetPic from "./PiperNetPic/PiperNetPic";
import Problem from "./Problem/Problem";
import NetworkPic from "./NetworkPic/NetworkPic";

export default function MainPage() {
    return (
      <MainPageStyled>
          <PiperNetPic />
          <Problem />
          <NetworkPic />
      </MainPageStyled>
    );
}