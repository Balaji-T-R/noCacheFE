import {
  Card,
  CardContent,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

const InvoiceData = (props) => {
  console.log(props.invoiceListData);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <React.Fragment>
      <Grid sx={{ marginLeft: '4rem', marginTop: '0.5rem' }}>
        <Typography align="left" variant="h6" sx={{ fontWeight: 'bold' }}>
          Business
        </Typography>
        <Typography align="left" sx={{ color: 'grey' }}>
          Medical Related Invoice
        </Typography>
      </Grid>
      {props.invoiceListData.map((e) => {
        return (
          <Grid
            sx={{
              marginLeft: '4rem',
              marginTop: '0.5rem',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Grid>
              <Card>
                <CardContent>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '0.7rem' }}>
                    {' '}
                    BILL TO{' '}
                  </Typography>
                  <Typography align="left" sx={{ fontSize: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold' }}>Customer Name </span> :
                    {e.nocCustomerName}
                  </Typography>
                  <Typography align="left" sx={{ fontSize: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold' }}>Email</span> :
                    {e.nocCustomerEmail}
                  </Typography>
                  <Typography align="left" sx={{ fontSize: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold' }}>Address </span>:{' '}
                    {e.nocCustomerAddress}
                  </Typography>
                  <Typography align="left" sx={{ fontSize: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold' }}>Phone</span> :{' '}
                    {e.nocPhoneNumber}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid sx={{ marginLeft: '18rem' }}>
              <Card sx={{ height: '5rem' }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', fontSize: '0.7rem' }}
                  >
                    Details
                  </Typography>
                  <Typography sx={{ fontSize: '0.7rem', marginTop: '0.7rem' }}>
                    Brief Details about your Project
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid sx={{ marginLeft: '15rem' }}>
              <Card sx={{ height: '5rem' }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', fontSize: '0.7rem' }}
                  >
                    Payment
                  </Typography>
                  <Typography align="left" sx={{ fontSize: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold' }}> Due Date </span> :
                    12/01/2024
                  </Typography>
                  <Typography align="left" sx={{ fontSize: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold' }}>Amount</span> : Rs.251
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        );
      })}
      <Grid sx={{ marginLeft: '4rem', marginTop: '0.5rem' }}>
        {props.rows.length < 1 && (
          <Typography variant="h6" align="left" sx={{ fontWeight: 'bold' }}>
            No Items Found
          </Typography>
        )}
        {props.rows.length > 0 && (
          <Typography variant="h6" align="left" sx={{ fontWeight: 'bold' }}>
            Bill Details
          </Typography>
        )}
      </Grid>
      {props.rows.length > 0 && (
        <Grid sx={{ marginLeft: '4rem', marginTop: '1rem' }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Item</StyledTableCell>
                  <StyledTableCell align="center">Quantity</StyledTableCell>
                  <StyledTableCell align="center">
                    Price&nbsp;(Rs)
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Amount&nbsp;(Rs)
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.rows.map((row) => (
                  <StyledTableRow key={row.item}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      sx={{ fontWeight: row.style }}
                    >
                      {row.item}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.price}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{ fontWeight: row.style }}
                    >
                      {row.amount}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default InvoiceData;
