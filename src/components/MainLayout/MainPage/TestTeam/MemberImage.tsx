import styled from "styled-components";
import img from './../../../../asserts/team/image-bertram.png'

export const MemberImage = styled.div<{ imageUrl: String }>`
    background: ${props => `url(${props.imageUrl}) no-repeat center`};
    background-size: cover;
    border-radius: 50%;
    width: 7vw;
    margin-top: 1vh;
    aspect-ratio: 1;
`;