import React from 'react';
import { TestTeamStyled } from './TestTeamStyled';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { H1 } from '../../../styles/H1';
import TextWrapper from '../TextWrapper/TextWrapper';
import { MemberImage } from './MemberImage';
import { TeamProps } from './Team.types';
import { P } from '../../../styles/P';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#ddd',
    // ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'center'
  }));

export default function TestTeam(props: TeamProps) {
    return (
      <TestTeamStyled>
            <TextWrapper>
            <H1 primary={false}>The Team</H1>
            <Grid container spacing={10}>
                {props.team.map(member => (
                    <Grid item xs={4}>
                        <Item>
                            <MemberImage imageUrl={member.imageUrl}/>
                        </Item>
                        <Item>
                        <P>
                            {member.memberName}
                        </P>
                    </Item>
                    </Grid>
                ))}
            </Grid>
            </TextWrapper>
      </TestTeamStyled>
    );
}