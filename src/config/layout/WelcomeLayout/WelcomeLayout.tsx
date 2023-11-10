import { Grid } from '@mui/material';
import React from 'react';
import GridContainerWelcome from './components/GridContainerWelcome';

interface WelcomeLayoutProps {
  component: React.ReactElement;
}

const WelcomeLayout: React.FC<WelcomeLayoutProps> = ({ component }) => {
  return (
    <GridContainerWelcome container justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        {component}
      </Grid>
    </GridContainerWelcome>
  );
};

export default WelcomeLayout;
