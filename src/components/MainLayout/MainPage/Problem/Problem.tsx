import React from 'react';
import { ProblemStyled } from './ProblemStyled';
import {H1} from "../../../styles/H1";
import {P} from "../../../styles/P";
import TextWrapper from "./TextWrapper/TextWrapper";
import {BoldText} from "../../../styles/BoldText";

export default function Problem() {
    return (
      <ProblemStyled>
          <TextWrapper>
              <H1 primary={false}>The Problem</H1>
              <P>
                  Beneath the flashy homepages of your favorite sites lurk Hooli™
                  and other evil corporations out to hoard and sell your most personal data.
              </P>
              <P>
                  What was built to be the ultimate platform for the free sharing of knowledge
                  has turned into a money-hungry monster feasting on our privacy and freedom.
              </P>
              <P>
                  But fear not, for Pied Piper has the answer! And it’s simple:
                  An autonomous peer-to-peer network featuring distributed storage powered by
                  universal compression, accelerated scheduling allocation, and end-to-end encryption.
              </P>
              <P>
                  Put even simpler — <BoldText>it’s the internet, completely decentralized.</BoldText>
              </P>
          </TextWrapper>
      </ProblemStyled>
    );
}