import {
  Grid,
  Typography,
  Button,
  Snackbar,
  Alert,
  Stack,
  TextField,
} from '@mui/material';
import { Table } from 'antd';

import React from 'react';
import AddCustomerDetails from './AddCustomerDetails';
import axios from 'axios';

const CustomerDetails = () => {
  const [addCustomerDetailsOpen, setAddCustomerDetailsOpen] =
    React.useState(false);
  const [showAddCustomerSuccessMessage, setShowAddCustomerSuccessMessage] =
    React.useState(false);
  const [addCustomerSnackBarSeverity, setAddCustomerSnackbarSeverity] =
    React.useState();
  const [customerDetailsTableData, setCustomerDetailsTableData] =
    React.useState([
      {
        key: '1',
        name: 'Bhai',
        address: `21, Thiyagu Nagar`,
        city: 'Sivaganga',
        state: 'Tamilnadu',
        country: 'India',
        pincode: '600 021',
        email: 'Bhai@gmail.com',
        phoneNumber: '987543921',
      },
      {
        key: '2',
        name: 'Mama',
        address: `31, Jesus Nagar`,
        city: 'Trichy',
        state: 'Tamilnadu',
        country: 'India',
        pincode: '601 100',
        email: 'Mama@gmail.com',
        phoneNumber: '987121455',
      },
      {
        key: '3',
        name: 'Harinath',
        address: `46, Vel Nagar`,
        city: 'Vellore',
        state: 'Tamilnadu',
        country: 'India',
        pincode: '603 165',
        email: 'NathVel@gmail.com',
        phoneNumber: '889081341',
      },
      {
        key: '4',
        name: 'Raj',
        address: `15, Rajan Nagar`,
        city: 'Trichy',
        state: 'Tamilnadu',
        country: 'India',
        pincode: '601 621',
        email: 'Raj@gmail.com',
        phoneNumber: '987543921',
      },
      {
        key: '5',
        name: 'Surya Bhai',
        address: `65, Bhai Nagar`,
        city: 'Trichy',
        state: 'Tamilnadu',
        country: 'India',
        pincode: '608 341',
        email: 'SuryaBhai@gmail.com',
        phoneNumber: '987543921',
      },
      {
        key: '6',
        name: 'Bala Murugan',
        address: `21, Murugan Nagar`,
        city: 'Sivaganga',
        state: 'Tamilnadu',
        country: 'India',
        pincode: '610 021',
        email: 'balam@gmail.com',
        phoneNumber: '8879064731',
      },
      {
        key: '7',
        name: 'Ps',
        address: `90, Ps Nagar`,
        city: 'Trichy',
        state: 'Tamilnadu',
        country: 'India',
        pincode: '602 451',
        email: 'Ps@gmail.com',
        phoneNumber: '8870987611',
      },
      {
        key: '8',
        name: 'Abishek',
        address: `27, Shek Nagar`,
        city: 'Trichy',
        state: 'Tamilnadu',
        country: 'India',
        pincode: '602 521',
        email: 'shek@gmail.com',
        phoneNumber: '987321456',
      },
      {
        key: '9',
        name: 'Kishore',
        address: `21, Shore Nagar`,
        city: 'Sivaganga',
        state: 'Tamilnadu',
        country: 'India',
        pincode: '600 021',
        email: 'SHore@gmail.com',
        phoneNumber: '987543921',
      },
      {
        key: '10',
        name: 'Nishanthan',
        address: `98, Nisha Nagar`,
        city: 'Trichy',
        state: 'Tamilnadu',
        country: 'India',
        pincode: '600 192',
        email: 'Nisha@gmail.com',
        phoneNumber: '7658981245',
      },
    ]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Pincode',
      dataIndex: 'pincode',
      key: 'pincode',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
  ];

  const handleCustomerDetailsClose = () => {
    setAddCustomerDetailsOpen(false);
  };

  const handleNewCusomterDetailsOnClick = () => {
    setAddCustomerDetailsOpen(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowAddCustomerSuccessMessage(false);
  };

  const handleAddCustomerDetails = (Obj) => {
    const tempObj = {
      key: (customerDetailsTableData.length + 1).toString(),
      name: Obj.addCustomerName,
      address:
        Obj.addCustomerAddressLineOne + ' ' + Obj.addCustomerAddressLineTwo,
      city: Obj.addCustomerCity,
      state: Obj.addCustomerState,
      country: Obj.addCustomerCountry,
      pincode: Obj.addCustomerPincode,
      email: Obj.addCustomerEmail,
      phoneNumber: Obj.addCustomerPhone,
    };
    axios
      .post('http://localhost:8282/noCache/CustomerDetails', null, {
        params: {
          customer_name: Obj.addCustomerName,
          address_line1: Obj.addCustomerAddressLineOne,
          address_line2: Obj.addCustomerAddressLineTwo,
          city: Obj.addCustomerCity,
          state: Obj.addCustomerState,
          country: Obj.addCustomerCountry,
          pincode: Obj.addCustomerPincode,
          phone: Obj.addCustomerPhone,
          email: Obj.addCustomerEmail,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.rowId) {
          setAddCustomerSnackbarSeverity('success');
          setAddCustomerDetailsOpen(false);
          setShowAddCustomerSuccessMessage(true);
          setCustomerDetailsTableData([tempObj, ...customerDetailsTableData]);
        } else {
          setAddCustomerSnackbarSeverity('error');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const customerSearchOnChange = (event) => {
    customerDetailsTableData.filter((e) => e.name === event.target.value);

    // setCustomerDetailsTableData(filteredData);
  };

  return (
    <React.Fragment>
      <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid sx={{ marginLeft: '1rem' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Customer Details
          </Typography>
        </Grid>
        <Grid sx={{ marginLeft: '50rem' }}>
          <Button
            variant="filled"
            sx={{
              width: '8rem',
              height: '2.5rem',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              size: 'medium',
              color: 'primary',
              backgroundColor: '#91b5ba',
              '&:hover': {
                backgroundColor: '#b0bec5',
              },
            }}
            onClick={handleNewCusomterDetailsOnClick}
          >
            New
          </Button>
        </Grid>
        <Grid sx={{ marginLeft: '1rem' }}>
          <TextField
            id="outlined-basic"
            label="Search with Name or Phone Number"
            variant="outlined"
            sx={{ width: '20rem' }}
            onChange={customerSearchOnChange}
            size="small"
            // InputProps={{ style: { height: 40 } }}
          />
        </Grid>
      </Grid>
      <br />
      <Grid>
        <Table
          columns={columns}
          dataSource={customerDetailsTableData}
          pagination={{ pageSize: 7 }}
        />
      </Grid>
      <AddCustomerDetails
        open={addCustomerDetailsOpen}
        onClose={handleCustomerDetailsClose}
        handleAddCustomerDetails={handleAddCustomerDetails}
      />
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={showAddCustomerSuccessMessage}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={addCustomerSnackBarSeverity}
            sx={{ width: '100%' }}
          >
            Customer Details has been addedd Sucessfully
          </Alert>
        </Snackbar>
      </Stack>
    </React.Fragment>
  );
};

export default CustomerDetails;
