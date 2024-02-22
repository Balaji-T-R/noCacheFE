import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  TextField,
} from '@mui/material';
import React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const NewCustomerInvoice = (props) => {
  return (
    <React.Fragment>
      <Dialog
        TransitionComponent={Transition}
        open={props.open}
        keepMounted
        onClose={props.OnClose}
      >
        <Grid>
          <DialogTitle sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
            Add Invoice
          </DialogTitle>
          <Box>
            <DialogContent sx={{ height: '15rem', width: '33rem' }}>
              <TextField
                variant="outlined"
                size="small"
                label="Name"
                onChange={(e) => {
                  props.setNewInvoiceName(e.target.value);
                }}
              />
              <TextField
                variant="outlined"
                size="small"
                label="Email Address"
                sx={{ marginLeft: '2rem' }}
                onChange={(e) => {
                  props.setNewInvoiceEmail(e.target.value);
                }}
              />
              <TextField
                variant="outlined"
                size="small"
                label="Address"
                sx={{ marginTop: '1rem' }}
                onChange={(e) => {
                  props.setNewInvoiceAddress(e.target.value);
                }}
              />
              <TextField
                variant="outlined"
                size="small"
                label="Phone"
                sx={{ marginTop: '1rem', marginLeft: '2rem' }}
                onChange={(e) => {
                  props.setNewInvoicePhone(e.target.value);
                }}
              />
            </DialogContent>
            <DialogActions sx={{ marginRight: '13rem' }}>
              <Button
                variant="contained"
                onClick={props.newInvoiceSubmitOnClick}
              >
                Submit
              </Button>
            </DialogActions>
            <br />
          </Box>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
};

export default NewCustomerInvoice;
