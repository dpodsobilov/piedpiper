import React from 'react';
import { MainPageStyled } from './MainPageStyled';
import TextWrapper from "./TextWrapper/TextWrapper";
import PiperNetPic from "./PiperNetPic/PiperNetPic";
import styled from "styled-components";

export const H1 = styled.h1<{ primary: boolean }>`
  color: ${(props) => props.primary ? 'white' : '#007765'};
  font-family: Roboto,sans-serif;
  font-size: 3vw;
`;
export default function MainPage() {
    return (
      <MainPageStyled>
          <PiperNetPic>
              <H1 primary={true}>PiperNet Is Here</H1>
          </PiperNetPic>
          <TextWrapper />
      </MainPageStyled>
    );
}