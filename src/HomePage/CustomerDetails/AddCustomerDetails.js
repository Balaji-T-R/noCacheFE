import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const AddCustomerDetails = (props) => {
  const [addCustomerFirstNameValue, setAddCustomerFirstNameValue] =
    React.useState();
  const [addCustomerLastNameValue, setAddCustomerLastNameValue] =
    React.useState();
  const [addCustomerAddressLineOneValue, setAddCustomerAddressLineOneValue] =
    React.useState();
  const [addCustomerAddressLineTwoValue, setAddCustomerAddressLineTwoValue] =
    React.useState();
  const [addCustomerCityValue, setAddCustomerCityValue] = React.useState();
  const [addCustomerStateValue, setAddCustomerStateValue] = React.useState();
  const [addCustomerCountryValue, setAddCustomerCountryValue] =
    React.useState();
  const [addCustomerPincodeValue, setAddCustomerPincodeValue] =
    React.useState();
  const [addCustomerEmailValue, setAddCustomerEmailValue] = React.useState();
  const [addCustomerPhoneValue, setAddCustomerPhoneValue] = React.useState();

  const addCustomerFirstNameOnChange = (e) => {
    setAddCustomerFirstNameValue(e.target.value);
  };

  const addCustomerLastNameOnChange = (e) => {
    setAddCustomerLastNameValue(e.target.value);
  };

  const addCustomerAddressLineOneOnChange = (e) => {
    setAddCustomerAddressLineOneValue(e.target.value);
  };

  const addCustomerAddressLineTwoOnChange = (e) => {
    setAddCustomerAddressLineTwoValue(e.target.value);
  };

  const addCustomerCityOnChange = (e) => {
    setAddCustomerCityValue(e.target.value);
  };

  const addCustomerStateOnChange = (e) => {
    setAddCustomerStateValue(e.target.value);
  };

  const addCustomerCountryOnChange = (e) => {
    setAddCustomerCountryValue(e.target.value);
  };

  const addCustomerEmailOnChange = (e) => {
    setAddCustomerEmailValue(e.target.value);
  };

  const addCustomerePhoneOnChange = (e) => {
    setAddCustomerPhoneValue(e.target.value);
  };

  const addCustomerPincodeOnChange = (e) => {
    setAddCustomerPincodeValue(e.target.value);
  };

  const addCustomerSaveOnClick = () => {
    const Obj = {};
    Obj.addCustomerName =
      addCustomerFirstNameValue + ' ' + addCustomerLastNameValue;
    Obj.addCustomerAddressLineOne = addCustomerAddressLineOneValue;
    Obj.addCustomerAddressLineTwo = addCustomerAddressLineTwoValue;
    Obj.addCustomerCity = addCustomerCityValue;
    Obj.addCustomerState = addCustomerStateValue;
    Obj.addCustomerCountry = addCustomerCountryValue;
    Obj.addCustomerPincode = addCustomerPincodeValue;
    Obj.addCustomerEmail = addCustomerEmailValue;
    Obj.addCustomerPhone = addCustomerPhoneValue;
    props.handleAddCustomerDetails(Obj);
  };

  return (
    <React.Fragment>
      <Dialog open={props.open} onClose={props.onClose} fullWidth maxWidth="sm">
        <Grid>
          <DialogTitle>
            <Typography
              varinat="h5"
              sx={{
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
            >
              Add Customer Details
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Grid sx={{ marginTop: '1rem', marginLeft: '1rem' }}>
              <FormControl>
                <TextField
                  label="First Name"
                  size="small"
                  onChange={addCustomerFirstNameOnChange}
                />
              </FormControl>
              <FormControl sx={{ marginLeft: '4rem' }}>
                <TextField
                  label="Last Name"
                  size="small"
                  onChange={addCustomerLastNameOnChange}
                />
              </FormControl>
              <br />
              <br />
              <FormControl>
                <TextField
                  label="Address Line 1"
                  size="small"
                  onChange={addCustomerAddressLineOneOnChange}
                />
              </FormControl>
              <FormControl sx={{ marginLeft: '4rem' }}>
                <TextField
                  label="Address ine 2"
                  size="small"
                  onChange={addCustomerAddressLineTwoOnChange}
                />
              </FormControl>
              <br />
              <br />
              <FormControl>
                <TextField
                  label="City"
                  size="small"
                  onChange={addCustomerCityOnChange}
                />
              </FormControl>
              <FormControl sx={{ marginLeft: '4rem' }}>
                <TextField
                  label="State"
                  size="small"
                  onChange={addCustomerStateOnChange}
                />
              </FormControl>
              <br />
              <br />
              <FormControl>
                <TextField
                  label="Country"
                  size="small"
                  onChange={addCustomerCountryOnChange}
                />
              </FormControl>
              <FormControl sx={{ marginLeft: '4rem' }}>
                <TextField
                  label="Pincode"
                  size="small"
                  onChange={addCustomerPincodeOnChange}
                />
              </FormControl>
              <br />
              <br />
              <FormControl>
                <TextField
                  label="Email"
                  size="small"
                  onChange={addCustomerEmailOnChange}
                />
              </FormControl>
              <FormControl sx={{ marginLeft: '4rem' }}>
                <TextField
                  label="Phone Number"
                  size="small"
                  onChange={addCustomerePhoneOnChange}
                />
              </FormControl>
            </Grid>
            <br />
          </DialogContent>
          <DialogActions sx={{ marginRight: '12rem' }}>
            <FormControl sx={{ width: '8rem', alignItems: 'center' }}>
              <Button
                variant="filled"
                sx={{
                  width: '8rem',
                  height: '1.8rem',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  size: 'medium',
                  color: 'primary',
                  backgroundColor: '#91b5ba',
                  '&:hover': {
                    backgroundColor: '#b0bec5',
                  },
                }}
                size="small"
                onClick={addCustomerSaveOnClick}
              >
                Save
              </Button>
            </FormControl>
            <FormControl sx={{ width: '8rem', alignItems: 'center' }}>
              <Button
                variant="filled"
                sx={{
                  width: '8rem',
                  marginLeft: '7rem',
                  height: '1.8rem',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  size: 'medium',
                  color: 'primary',
                  backgroundColor: '#91b5ba',
                  '&:hover': {
                    backgroundColor: '#b0bec5',
                  },
                }}
                size="small"
                onClick={props.onClose}
              >
                Cancel
              </Button>
            </FormControl>
          </DialogActions>
        </Grid>
        <br />
      </Dialog>
    </React.Fragment>
  );
};

export default AddCustomerDetails;
