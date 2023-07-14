import { P } from "../../../styles/P";
import { FooterStyled } from "./FooterStyled";


export default function Footer() {
    return (
      <FooterStyled>
          <P fontSize="0.7vw" color='white' paddingBottom='0'>All other trademarks and copyrights are the property</P>
          <P fontSize="0.7vw" color='white' paddingBottom='0'>of their respective owners. Use of these names, trademarks and brands</P>
          <P fontSize="0.7vw" color='white'>does not imply endorsement.</P>
      </FooterStyled>
    );
}