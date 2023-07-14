import React from 'react';
import { TestTeamStyled } from './TeamStyled';
import Grid from '@mui/material/Grid';
import { H1 } from '../../../styles/H1';
import TextWrapper from '../TextWrapper/TextWrapper';
import { MemberImage } from './MemberImage';
import { TeamProps } from './Team.types';
import { P } from '../../../styles/P';
import { Item } from './Item';

export default function TestTeam({ team }: TeamProps) {
    return (
      <TestTeamStyled>
            <TextWrapper>
            <H1 primary={false}>The Team</H1>
            <Grid container spacing={10}>
                {team.map(member => (
                    <Grid item xs={4}>
                        <Item>
                            <MemberImage imageUrl={member.imageUrl}/>
                            <P bold color='#007765' paddingBottom='0'>
                                {member.memberName}
                            </P>
                            {member.position}
                        </Item>
                    </Grid>
                ))}
            </Grid>
            </TextWrapper>
      </TestTeamStyled>
    );
}