import React from 'react';
import {NetworkPicStyled} from "./NetworkPicStyled";
import {H2} from "../../../styles/H2";
import {TextWrapper} from './TextWrapper'


export default function NetworkPic() {
    return (
        <NetworkPicStyled>
            <TextWrapper>
                <H2 primary={true} italic={true}>
                    We’re in this together! All of our computers and phones join in a network to mak
                    the strongest supercomputer the world has ever seen.
                </H2>
            </TextWrapper>
        </NetworkPicStyled>
    );
}