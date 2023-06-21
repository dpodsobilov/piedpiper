import React from 'react';
import {PiperNetPicStyled} from "./PiperNetPicStyled";
import {PiperNetPicProps} from "./PiperNetPic.types";


export default function PiperNetPic(props: PiperNetPicProps) {
    return (
        <PiperNetPicStyled>
            {props.children}
        </PiperNetPicStyled>
    );
}