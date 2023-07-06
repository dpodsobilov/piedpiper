import styled from "styled-components";

export const MemberImage = styled.div<{ imageUrl: String }>`
    background-image: url({imageUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 7vw;
    aspect-ratio: 1;
`;