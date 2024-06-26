import React from 'react';
import TextField from '@mui/material/TextField';
import TeamType from '../../types/TeamType';
import { Box } from '@mui/material';
import { teamNameInputStyle, teamNameInputBoxStyle } from './style';

interface TeamComponentProps {
  id: TeamType['id'];
  value: TeamType['name'];
  changeTeamName: any;
};

const TeamComponent = ({
  id,
  value,
  changeTeamName,
}: TeamComponentProps) => (
  <Box sx={teamNameInputBoxStyle}>
    <TextField sx={teamNameInputStyle} variant="standard" placeholder={value} value={value} onChange={(e) => changeTeamName(e.target.value, id)} />
  </Box>
);

export default TeamComponent;
