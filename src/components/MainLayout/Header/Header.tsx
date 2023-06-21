import React from 'react';
import { HeaderStyled } from './HeaderStyled';
import {HeaderLogo} from "./HeaderLogo";
import HeaderSection from "./HeaderSection";

export default function Header() {
    return (
      <HeaderStyled>
        <HeaderLogo />
        <HeaderSection/>
      </HeaderStyled>
    );
}