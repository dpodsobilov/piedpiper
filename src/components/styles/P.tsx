import styled from "styled-components";

export const P = styled.p<{ 
  bold?: boolean,
  italic?: boolean, 
  color?: string, 
  paddingBottom?: string,
  fontSize?: string
  }>`
  color: ${(props) => props.color ? props.color.toString() : 'black'};
  font-family: Roboto,sans-serif;
  font-size: ${(props) => props.fontSize ? props.fontSize : '1.2vw'};
  margin-bottom: ${(props) => props.paddingBottom ? props.paddingBottom : '1em'};
  margin-top: 1vh;
  font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
  font-style: ${(props) => props.italic ? 'italic' : 'normal'};
`;