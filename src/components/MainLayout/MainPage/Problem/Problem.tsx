import React from 'react';
import { ProblemStyled } from './ProblemStyled';
import {H1} from "../../../styles/H1";
import {P} from "../../../styles/P";
import TextWrapper from "./TextWrapper/TextWrapper";

export default function Problem() {
    return (
      <ProblemStyled>
          <TextWrapper>
              <H1 primary={false}>The Problem</H1>
              <P>
                  Beneath the flashy homepages of your favorite sites lurk Hooli™
                  and other evil corporations out to hoard and sell your most personal data.
              </P>
              <br/>
              <P>
                  What was built to be the ultimate platform for the free sharing of knowledge
                  has turned into a money-hungry monster feasting on our privacy and freedom.
              </P>
              <br/>
              <P>
                  But fear not, for Pied Piper has the answer! And it’s simple:
                  An autonomous peer-to-peer network featuring distributed storage powered by
                  universal compression, accelerated scheduling allocation, and end-to-end encryption.
              </P>
              <br/>
              <P>
                  Put even simpler — <b>it’s the internet, completely decentralized.</b>
              </P>
          </TextWrapper>
      </ProblemStyled>
    );
}