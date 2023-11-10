import { Grid, Typography } from '@mui/material';
import React from 'react';
import ListTransaction from '../components/ListTransaction';
import TitlePage from '../components/TitlePage';
import { useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/transactionsSlice';
import { RootState } from '../store';
import { useSelector } from 'react-redux';

const Home: React.FC = () => {
  const transactionsRedux = useAppSelector(selectAll);
  const saldo = useSelector((state: RootState) => state.saldoSlice.value);

  return (
    <Grid container>
      <TitlePage title="Lista de transações" />
      <Typography>{saldo}</Typography>
      <Grid item xs={12}>
        <ListTransaction data={transactionsRedux} />
      </Grid>
    </Grid>
  );
};

export default Home;

