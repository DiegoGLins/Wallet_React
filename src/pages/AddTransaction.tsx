import { Button, Grid, MenuItem, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TitlePage from '../components/TitlePage';
import { useAppDispatch } from '../store/hooks';
import { addTransaction } from '../store/modules/transactionsSlice';
import TransactionType from '../types/TransactionType';
import generateID from '../utils/generateID';
import { credito, debito } from '../store/modules/saldoSlice';

const AddTransaction: React.FC = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [type, setType] = useState<string>('debito' || 'credito');

  const [descriptionError, setDescriptionError] = useState<boolean>(false);
  const [valueError, setValueError] = useState<boolean>(false);

  useEffect(() => {
    if (description.length) {
      if (description.length < 3) {
        setDescriptionError(true);
      } else {
        setDescriptionError(false);
      }
    } else {
      setDescriptionError(false);
    }
  }, [description]);

  useEffect(() => {
    if (value) {
      if (value < 0) {
        setValueError(true);
      } else {
        setValueError(false);
      }
    } else {
      setValueError(false);
    }
  }, [value]);

  const handleClear = () => {
    setDescription('');
    setDate('');
    setValue(0);
  };

  const handleAdd = () => {
    const transaction: TransactionType[] = [{ id: generateID(), description, value, date, type }];

    dispatch(addTransaction(transaction));
    if (type === 'debito') {
      dispatch(debito(value));

    } else if (type === 'credito') {
      dispatch(credito(value));
    }

    handleClear();
  };

  return (
    <Grid container spacing={2}>
      <TitlePage title="Adicionar nova transação" />
      <Grid item xs={12}>
        <TextField
          error={descriptionError}
          helperText={descriptionError ? 'Digite um nome válido, no mínimo 3 caracteres' : ''}
          value={description}
          onChange={event => setDescription(event.target.value)}
          fullWidth
          id="descrição"
          label="Digite uma descrição"
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          error={valueError}
          helperText={valueError ? 'Digite valor válido, não pode ser negativo' : ''}
          value={value}
          onChange={event => setValue(Number(event.target.value))}
          fullWidth
          type="number"
          id="valor"
          label="Digite um valor"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={date}
          onChange={event => setDate(event.target.value)}
          fullWidth
          type="date"
          id="data"
          // label="Escolha a data"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={type}
          onChange={event => {
            setType(event.target.value);
          }}
          fullWidth
          select
          defaultValue=""
          label="Tipo da transação"
          variant="outlined"
        >
          <MenuItem value="debito">Débito</MenuItem>
          <MenuItem value="credito">Crédito</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleClear} fullWidth variant="outlined">
          Limpar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleAdd} disabled={descriptionError || valueError} fullWidth variant="contained">
          Cadastrar
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTransaction;
