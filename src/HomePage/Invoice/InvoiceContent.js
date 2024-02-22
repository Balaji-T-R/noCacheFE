import { Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

const InvoiceContent = (props) => {
  return (
    <React.Fragment>
      <Grid
        sx={{
          marginLeft: '4rem',
          marginTop: '0.2rem',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Grid sx={{ marginTop: '0.4rem' }}>
          <Typography sx={{ fontWeight: 'bold' }}>
            {props.invoiceContentData}
          </Typography>
        </Grid>
        <Grid>
          <Button
            sx={{
              marginLeft: '35rem',
              fontSize: '0.7rem',
              marginTop: '0.4rem',
              height: '1.7rem',
              width: '9rem',
              fontWeight: 'bold',
              backgroundColor: '#78909c',
              color: 'black',
              '&:hover': {
                backgroundColor: '#b0bec5',
              },
            }}
          >
            Record Payment
          </Button>
        </Grid>
        <Grid>
          <Button
            sx={{
              marginLeft: '3rem',
              marginTop: '0.4rem',
              fontSize: '0.7rem',
              height: '1.7rem',
              width: '3rem',
              fontWeight: 'bold',
              backgroundColor: '#78909c',
              color: 'black',
              '&:hover': {
                backgroundColor: '#b0bec5',
              },
            }}
          >
            More
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: '1.2rem', marginLeft: '2.5rem' }} />
    </React.Fragment>
  );
};

export default InvoiceContent;
