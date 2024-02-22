import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React from 'react';

const Organization = (props) => {
  const orgGridFlex = {
    display: 'flex',
    flexDirection: 'row',
    gap: '5rem',
    marginLeft: '30rem',
  };

  console.log(props);

  const [orgNameValue, setOrgNameValue] = React.useState(
    props.organizationData.org_name
  );
  const [orgGstValue, setOrgGstValue] = React.useState(
    props.organizationData.gst
  );
  const [orgAddressLineOneValue, setOrgAddressLineOneValue] = React.useState(
    props.organizationData.address_line1
  );
  const [orgAddressLineTwoValue, setOrgAddressLineTwoValue] = React.useState(
    props.organizationData.address_line2
  );
  const [orgCityValue, setOrgCityValue] = React.useState(
    props.organizationData.city
  );
  const [orgStateValue, setOrgStateValue] = React.useState(
    props.organizationData.state
  );
  const [orgCountryValue, setOrgCountryValue] = React.useState(
    props.organizationData.country
  );
  const [orgPinCodeValue, setOrgPinCodeValue] = React.useState(
    props.organizationData.pincode
  );
  const [orgEmailValue, setOrgEmailValue] = React.useState(
    props.organizationData.email
  );
  const [orgPhoneValue, setOrgPhoneValue] = React.useState(
    props.organizationData.phone
  );

  const organizationSaveOnClick = () => {
    axios
      .put('http://localhost:8282/noCache/Organisation', null, {
        params: {
          org_name: orgNameValue,
          address_line1: orgAddressLineOneValue,
          address_line2: orgAddressLineTwoValue,
          city: orgCityValue,
          state: orgStateValue,
          country: orgCountryValue,
          pincode: orgPinCodeValue,
          phone: orgPhoneValue,
          email: orgEmailValue,
          gst: orgGstValue,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Grid>
        <Typography variant="h4">Organisation Detail</Typography>
      </Grid>
      <br />
      <Grid>
        <Grid sx={orgGridFlex}>
          <Grid>
            <FormControl>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                label="Name"
                value={orgNameValue}
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setOrgNameValue(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                label="GST"
                value={orgGstValue}
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setOrgGstValue(e.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid sx={orgGridFlex}>
          <FormControl>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Address Line 1"
              value={orgAddressLineOneValue}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setOrgAddressLineOneValue(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Address Line 2"
              value={orgAddressLineTwoValue}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setOrgAddressLineTwoValue(e.target.value)}
            />
          </FormControl>
        </Grid>
        <br />
        <br />
        <Grid sx={orgGridFlex}>
          <FormControl>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="City"
              value={orgCityValue}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setOrgCityValue(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="State"
              value={orgStateValue}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setOrgStateValue(e.target.value)}
            />
          </FormControl>
        </Grid>
        <br />
        <br />
        <Grid sx={orgGridFlex}>
          <FormControl>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Country"
              value={orgCountryValue}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setOrgCountryValue(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Pincode"
              value={orgPinCodeValue}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setOrgPinCodeValue(e.target.value)}
            />
          </FormControl>
        </Grid>
        <br />
        <br />
        <Grid sx={orgGridFlex}>
          <FormControl>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Email"
              value={orgEmailValue}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setOrgEmailValue(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Phone Number"
              InputLabelProps={{ shrink: true }}
              value={orgPhoneValue}
              onChange={(e) => setOrgPhoneValue(e.target.value)}
            />
          </FormControl>
        </Grid>
        <br />
        <br />
        <FormControl sx={{ width: '6rem' }}>
          <Button
            fullWidth
            variant="contained"
            size="small"
            onClick={organizationSaveOnClick}
          >
            SAVE
          </Button>
        </FormControl>
      </Grid>
    </React.Fragment>
  );
};

export default Organization;
