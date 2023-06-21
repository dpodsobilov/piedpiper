import React from 'react';
import { MainPageStyled } from './MainPageStyled';
import TextWrapper from "./TextWrapper/TextWrapper";
import {PiperNetPic} from "./PiperNetPic";


export default function MainPage() {
    return (
      <MainPageStyled>
          <PiperNetPic />
          <TextWrapper />
      </MainPageStyled>
    );
}