import { Grid } from '@mui/material';
import React from 'react';
import ListTransaction from '../components/ListTransaction';
import TitlePage from '../components/TitlePage';
import { useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/transactionsSlice';

const Home: React.FC = () => {
  const transactionsRedux = useAppSelector(selectAll);

  return (
    <Grid container>
      <TitlePage title="Lista de transações" />

      <Grid item xs={12}>
        <ListTransaction data={transactionsRedux}/>
      </Grid>
    </Grid>
  );
};

export default Home;
