import React from 'react';
import { TextWrapperStyled } from './TextWrapperStyled';
import {TextWrapperTypes} from "./TextWrapper.types";

export default function TextWrapper(props: TextWrapperTypes) {
    return (
      <TextWrapperStyled>
          {props.children}
      </TextWrapperStyled>
    );
}