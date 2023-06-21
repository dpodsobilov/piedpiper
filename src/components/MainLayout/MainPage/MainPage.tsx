import React from 'react';
import { MainPageStyled } from './MainPageStyled';
import TextWrapper from "./TextWrapper/TextWrapper";
import PiperNetPic from "./PiperNetPic/PiperNetPic";
import styled from "styled-components";
import {H1} from "../../styles/H1";
import {P} from "../../styles/P";

export default function MainPage() {
    return (
      <MainPageStyled>
          <PiperNetPic>
              <H1 primary={true}>PiperNet Is Here</H1>
          </PiperNetPic>

          <TextWrapper>
              <H1 primary={false}>The Problem</H1>
              <P>
                  Beneath the flashy homepages of your favorite sites lurk Hooli™
                  and other evil corporations out to hoard and sell your most personal data.
              </P>
          </TextWrapper>
      </MainPageStyled>
    );
}