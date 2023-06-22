import styled from "styled-components";

export const P = styled.p<{ bold?: boolean, italic?: boolean, color?: string }>`
  color: ${(props) => props.color ? props.color.toString() : 'black'};
  font-family: Roboto,sans-serif;
  font-size: 1.2vw;
  margin-bottom: 1em;
  margin-top: 1vh;
  font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
  font-style: ${(props) => props.italic ? 'italic' : 'normal'};
`;