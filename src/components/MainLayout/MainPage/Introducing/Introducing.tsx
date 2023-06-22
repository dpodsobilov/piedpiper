import React from 'react';
import { IntroducingStyled } from './IntroducingStyled';
import {H1} from "../../../styles/H1";
import {P} from "../../../styles/P";
import TextWrapper from "../TextWrapper/TextWrapper";
import {BoldText} from "../../../styles/BoldText";
import LogoSection from "./LogoSection/LogoSection";

export default function Introducing() {
    return (
      <IntroducingStyled>
          <TextWrapper>
              <H1 primary={false}>Introducing PiedPiperCoin</H1>
              <LogoSection>
                  Pied Piper's new internet is built for users, by users.
                  You supply the storage, compute, and networking resources that power our entire decentralized web.
              </LogoSection>
              <P>
                  Now there's a way to give credit where credit is due. Compute credit, that is!
                  The more you share your device resources, the more PiedPiperCoin you receive.
              </P>
              <P>
                  Whether you're a developer with an app ready for market, or just an Average Joe
                  with a smartphone you'll love all you can do with PiedPiperCoin.
              </P>
          </TextWrapper>
      </IntroducingStyled>
    );
}