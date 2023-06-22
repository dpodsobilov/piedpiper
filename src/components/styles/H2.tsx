import styled from "styled-components";

export const H2 = styled.h2<{ primary: boolean, italic?: boolean }>`
  color: ${(props) => props.primary ? 'white' : '#007765'};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  font-family: Roboto,sans-serif;
  font-size: 1.75vw;
`;