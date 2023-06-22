import React from 'react';
import {LogoSectionStyled} from "./LogoSectionStyled";
import {LogoSectionProps} from "./LogoSection.types";
import {P} from "../../../../styles/P";
import {LogoImage} from "./LogoImage";


export default function LogoSection(props: LogoSectionProps) {
    return (
        <LogoSectionStyled>
            <LogoImage />
            <P>{ props.children }</P>
        </LogoSectionStyled>
    );
}