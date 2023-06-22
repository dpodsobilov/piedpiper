import styled from "styled-components";

export const H1 = styled.h1<{ primary: boolean, italic?: boolean }>`
  color: ${(props) => props.primary ? 'white' : '#007765'};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  font-family: Roboto,sans-serif;
  font-size: 3vw;
  margin: 1vh auto 0;
`;