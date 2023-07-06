import React from 'react';
import { MainPageStyled } from './MainPageStyled';
import PiperNetPic from "./PiperNetPic/PiperNetPic";
import Problem from "./Problem/Problem";
import NetworkPic from "./NetworkPic/NetworkPic";
import Introducing from "./Introducing/Introducing";
import TestTeam from './TestTeam/TestTeam';

  

const team = [
  { memberName: "Richard Hendricks", imageUrl: "./../../../../asserts/team/image-richard.png" },
]

export default function MainPage() {
    return (
      <MainPageStyled>
          <PiperNetPic />
          <Problem />
          <NetworkPic />
          <Introducing />
          <TestTeam team={team} />
      </MainPageStyled>
    );
}