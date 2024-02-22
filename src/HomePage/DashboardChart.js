import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box, Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';

const DashboardChart = () => {
  const data = [
    { id: 0, value: 10, label: `Dr.Reddy's` },
    { id: 1, value: 15, label: 'Sun Pharma' },
    { id: 2, value: 20, label: 'Cipla' },
  ];

  const chartSetting = {
    xAxis: [
      {
        label: 'Amount (Rs.)',
      },
    ],
    width: 500,
    height: 400,
  };

  const dataset = [
    {
      Revenue: 21,
      month: 'Jan',
    },
    {
      Revenue: 28,
      month: 'Feb',
    },
    {
      Revenue: 41,
      month: 'Mar',
    },
    {
      Revenue: 73,
      month: 'Apr',
    },
    {
      Revenue: 99,
      month: 'May',
    },
    {
      Revenue: 144,
      month: 'June',
    },
    {
      Revenue: 319,
      month: 'July',
    },
    {
      Revenue: 249,
      month: 'Aug',
    },
    {
      Revenue: 131,
      month: 'Sept',
    },
    {
      Revenue: 55,
      month: 'Oct',
    },
    {
      Revenue: 48,
      month: 'Nov',
    },
    {
      Revenue: 25,
      month: 'Dec',
    },
  ];

  const valueFormatter = (value) => `Rs. ${value}`;

  return (
    <React.Fragment>
      <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid sx={{ width: '35rem' }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
            Revenue - May 2023
          </Typography>
          <Box sx={{ marginTop: '2rem' }}>
            <PieChart
              series={[
                {
                  data,
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: 'gray',
                  },
                },
              ]}
              height={200}
            />
          </Box>
        </Grid>
        <Grid sx={{ width: '35rem', marginLeft: '15rem' }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
            Revenue - Total
          </Typography>
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            sx={{
              width: '35rem',
              height: '20rem',
              bottom: '2rem',
              position: 'relative',
            }}
          >
            <BarChart
              dataset={dataset}
              yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
              series={[
                {
                  dataKey: 'Revenue',
                  valueFormatter,
                },
              ]}
              layout="horizontal"
              {...chartSetting}
            />
          </Stack>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DashboardChart;
