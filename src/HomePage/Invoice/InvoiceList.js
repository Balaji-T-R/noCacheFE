import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import React from 'react';

const InvoiceList = (props) => {
  return (
    <React.Fragment>
      <Grid
        sx={{
          height: '3rem',
        }}
      >
        <Grid sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
          <Grid sx={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
            <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
              All Invoices
            </Typography>
          </Grid>
          <Grid sx={{ marginLeft: '4rem' }}>
            <Button
              sx={{
                marginTop: '0.5rem',
                fontSize: '0.7rem',
                height: '1.5rem',
                width: '1.5rem',
                fontWeight: 'bold',
                backgroundColor: '#78909c',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#b0bec5',
                },
              }}
              onClick={props.newInoviceOnClick}
            >
              New
            </Button>
          </Grid>
        </Grid>
        <br />
        <Divider />
        <Grid>
          <List
            sx={{
              cursor: 'pointer',
              marginLeft: '1rem',
            }}
          >
            {props.InoviceListData.map((e) => {
              return (
                <React.Fragment>
                  <ListItem
                    onClick={() => {
                      props.InvoiceListOnClick(e.id);
                    }}
                  >
                    <Grid>
                      <Typography>
                        {e.name}
                        <br />
                        <span style={{ color: 'grey', fontSize: '0.9rem' }}>
                          {e.id}
                        </span>
                      </Typography>
                    </Grid>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default InvoiceList;
