import React from 'react';
import { MainPageStyled } from './MainPageStyled';
import PiperNetPic from "./PiperNetPic/PiperNetPic";
import Problem from "./Problem/Problem";
import NetworkPic from "./NetworkPic/NetworkPic";
import Introducing from "./Introducing/Introducing";
import TestTeam from './TestTeam/TestTeam';
const images = require.context('../../../asserts/team', true);
  
const imageList = images.keys().map(image => images(image));
const team = [
  { memberName: "Richard Hendricks", imageUrl: imageList.at(0) },
  { memberName: "Dinesh Chugtai", imageUrl: imageList.at(1) },
  { memberName: "Bertram Gilfoyle", imageUrl: imageList.at(2) },
  { memberName: "Jared Dunn", imageUrl: imageList.at(3) },
  { memberName: "Monica Hall", imageUrl: imageList.at(4) },
  { memberName: "Nelson Bighetti", imageUrl: imageList.at(5) },
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