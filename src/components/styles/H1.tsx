import styled from "styled-components";

export const H1 = styled.h1<{ primary: boolean }>`
  color: ${(props) => props.primary ? 'white' : '#007765'};
  font-family: Roboto,sans-serif;
  font-size: 3vw;
  margin-bottom: 0;
  margin-top: 1vh;
`;