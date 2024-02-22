import { Grid } from '@mui/material';
import { Table, Typography } from 'antd';
import React from 'react';

const Product = () => {
  const { Title } = Typography;

  const data = [
    {
      key: '1',
      productName: 'Pantaprazole',
      batchSize: 12,
      prize: 50,
      gst: 'RWYH3562AS',
      hsn: 76,
      manufacturer: 'Cipla',
    },
    {
      key: '2',
      productName: 'Omeez',
      batchSize: 15,
      prize: 70,
      gst: 'IOWS4245I',
      hsn: 15,
      manufacturer: `Dr.Reddy'`,
    },
    {
      key: '3',
      productName: 'Gelusil',
      batchSize: 20,
      prize: 80,
      gst: 'KLP987612',
      hsn: 12,
      manufacturer: 'Mano',
    },
  ];

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Batch Size',
      dataIndex: 'batchSize',
      key: 'batchSize',
      sorter: (a, b) => a.batchSize - b.batchSize,
    },
    {
      title: 'Price',
      dataIndex: 'prize',
      key: 'prize',
      sorter: (a, b) => a.prize - b.prize,
    },
    {
      title: 'GST',
      dataIndex: 'gst',
      key: 'gst',
    },
    {
      title: 'HSN',
      dataIndex: 'hsn',
      key: 'hsn',
      sorter: (a, b) => a.hsn - b.hsn,
    },
    {
      title: 'Manufacturer',
      dataIndex: 'manufacturer',
      key: 'manufacturer',
    },
  ];

  return (
    <React.Fragment>
      <Grid>
        <Title level={4} align="left" style={{ marginLeft: '1rem' }}>
          Products
        </Title>
      </Grid>
      <Grid>
        <Table columns={columns} dataSource={data} />
      </Grid>
    </React.Fragment>
  );
};

export default Product;
