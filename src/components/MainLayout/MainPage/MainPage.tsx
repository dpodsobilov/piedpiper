import React from 'react';
import { MainPageStyled } from './MainPageStyled';
import TextWrapper from "./Problem/TextWrapper/TextWrapper";
import PiperNetPic from "./PiperNetPic/PiperNetPic";
import styled from "styled-components";
import {H1} from "../../styles/H1";
import {P} from "../../styles/P";
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