import React, { useEffect, useMemo, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import TransactionType from '../types/TransactionType';

interface ListTransactionProps {
  data: TransactionType[];
}

const ListTransaction: React.FC<ListTransactionProps> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [dataLocal, setDataLocal] = useState<TransactionType[]>([]);

  useEffect(() => {
    setDataLocal([...data]);
  }, [data]);


  const listMemo = useMemo(() => {
    return dataLocal.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <ListItem
            alignItems="flex-start"
          >
          
            <ListItemText
              primary={item.description}
              secondary={
                <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                  {item.value}
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      );
    });
  }, [dataLocal]);

  return (
    <List sx={{ bgcolor: 'background.paper' }}>
      {dataLocal.length ? listMemo : <Typography variant="body1">Nenhum lançamento.</Typography>}
    </List>
  );
};

export default ListTransaction;
