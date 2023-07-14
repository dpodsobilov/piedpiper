export type Member = {
    memberName: string,
    imageUrl: string,
    position: string,
}

export interface TeamProps {
    team: Member[];
}