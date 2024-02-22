import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';
import InvoiceList from './Invoice/InvoiceList';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FactoryIcon from '@mui/icons-material/Factory';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import InventoryIcon from '@mui/icons-material/Inventory';
import DashboardChart from './DashboardChart';
import InvoiceContent from './Invoice/InvoiceContent';
import InvoiceData from './Invoice/InvoiceData';
import NewCustomerInvoice from './NewCustomerInvoice';
import StoreIcon from '@mui/icons-material/Store';
import Organization from './Organization/Organization';
import axios from 'axios';
import Product from './Product/Product';
import CustomerDetails from './CustomerDetails/CustomerDetails';
import DescriptionIcon from '@mui/icons-material/Description';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const HomePage = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showInvoice, setShowInvoice] = React.useState(false);
  const [showDashboard, setShowDashboard] = React.useState(true);
  const [showInvoiceContent, setShowInvoiceContent] = React.useState(false);
  const [invoiceContentData, setInvoiceContentData] = React.useState();
  const [invoiceDataColumn, setInVoiceDataColumn] = React.useState();
  const [invoiceTableColumn, setInvoiceTableColumn] = React.useState();
  const [showOrg, setShowOrg] = React.useState(false);
  const [organizationData, setOrganizationData] = React.useState();
  const [showProduct, setShowProduct] = React.useState(false);
  const [showCustomerDetails, setShowCustomerDetails] = React.useState(false);
  const [openNewCustomerInvoice, setOpenNewCustomerInvoice] =
    React.useState(false);
  const [newInvoiceName, setNewInvoiceName] = React.useState();
  // eslint-disable-next-line
  const [newInvoiceEmail, setNewInvoiceEmail] = React.useState();
  // eslint-disable-next-line
  const [newInvoiceAddress, setNewInvoiceAddress] = React.useState();
  // eslint-disable-next-line
  const [newInvoicePhone, setNewInvoicePhone] = React.useState();
  const [invoiceListUsers, setInvoiceListUsers] = React.useState([
    {
      id: 'NOC-0000123',
      name: 'Aniruthya',
    },
    {
      id: 'NOC-0000343',
      name: 'Prasanth',
    },
    {
      id: 'NOC-0000413',
      name: 'Harinath',
    },
    {
      id: 'NOC-0000213',
      name: 'Prasanth',
    },
  ]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerMenuDataOnClick = (e, name) => {
    console.log(name);

    if (name === 'Dashboard') {
      setShowOrg(false);
      setInvoiceContentData();
      setShowInvoiceContent(false);
      setShowInvoice(false);
      setShowProduct(false);
      setShowCustomerDetails(false);
      setShowDashboard(true);
    } else if (name === 'Invoice') {
      setShowOrg(false);
      setShowDashboard(false);
      setShowProduct(false);
      setShowCustomerDetails(false);
      setShowInvoice(true);
    } else if (name === 'Products') {
      setShowDashboard(false);
      setInvoiceContentData();
      setShowInvoice(false);
      setShowOrg(false);
      setShowCustomerDetails(false);
      setShowProduct(true);
    } else if (name === 'Org') {
      setShowDashboard(false);
      setInvoiceContentData();
      setShowInvoice(false);
      setShowProduct(false);
      setShowCustomerDetails(false);
      setShowOrg(true);
    } else if (name === 'Customer Details') {
      setShowDashboard(false);
      setInvoiceContentData();
      setShowInvoice(false);
      setShowProduct(false);
      setShowOrg(false);
      setShowCustomerDetails(true);
    }
  };

  const newInoviceOnClick = () => {
    setOpenNewCustomerInvoice(true);
  };

  const newCustomerInvoiceOnClose = () => {
    setOpenNewCustomerInvoice(false);
  };

  const invoiceListData = [
    {
      id: 1,
      nocNumber: 'NOC-0000123',
      nocCustomerName: 'Aniruthya',
      nocCustomerEmail: 'Aniruthya@gmail.com',
      nocCustomerAddress: 'Sivaganga',
      nocPhoneNumber: '987654321',
    },
    {
      id: 2,
      nocNumber: 'NOC-0000343',
      nocCustomerName: 'Prasanth',
      nocCustomerEmail: 'prasanth@gmail.com',
      nocCustomerAddress: 'Trichy',
      nocPhoneNumber: '989789789',
    },
    {
      id: 1,
      nocNumber: 'NOC-0000413',
      nocCustomerName: 'Harinath',
      nocCustomerEmail: 'harinathv@gmail.com',
      nocCustomerAddress: 'Vellore',
      nocPhoneNumber: '776526721',
    },
    {
      id: 1,
      nocNumber: 'NOC-0000213',
      nocCustomerName: 'Prashant Mama',
      nocCustomerEmail: 'Prashantmama@gmail.com',
      nocCustomerAddress: 'Trichy',
      nocPhoneNumber: '987431262',
    },
  ];

  React.useEffect(() => {
    axios
      .get('http://localhost:8282/noCache/Organisation')
      .then((res) => {
        console.log(res.data[0]);
        setOrganizationData(res.data[0]);
      })
      .catch((e) => console.log(e));
  }, []);

  const aniruthyaInvoiceTableRows = [
    {
      item: 'Pantaprazole',
      quantity: 1,
      price: 12,
      amount: 12,
    },
    { item: 'Omeez', quantity: 1, price: 12, amount: 12 },
    { item: 'Gelsil', quantity: 1, price: 12, amount: 12 },
    { item: 'Vicks', quantity: 1, price: 12, amount: 12 },
    { item: 'Sub Total', amount: 48, style: 'bold' },
    { item: 'Tax', amount: 2, style: 'bold' },
    { item: 'Total', amount: 50, style: 'bold' },
  ];

  const prasanthInvoiceTableRows = [
    {
      item: 'Pantaprazole',
      quantity: 1,
      price: 12,
      amount: 12,
    },
    { item: 'Sub Total', amount: 12, style: 'bold' },
    { item: 'Tax', amount: 2, style: 'bold' },
    { item: 'Total', amount: 14, style: 'bold' },
  ];

  const invoiceListOnClick = (e) => {
    const filteredInvocieListData = invoiceListData.filter((f) => {
      return f.nocNumber === e;
    });
    if (e === 'NOC-0000123') {
      setInvoiceTableColumn(aniruthyaInvoiceTableRows);
    } else if (e === 'NOC-0000343') {
      setInvoiceTableColumn(prasanthInvoiceTableRows);
    } else {
      setInvoiceTableColumn([]);
    }
    setInVoiceDataColumn(filteredInvocieListData);
    setInvoiceContentData(e);
    setShowInvoiceContent(true);
  };

  const newInvoiceSubmitOnClick = () => {
    setOpenNewCustomerInvoice(false);
    const tempObj = {
      id: `NOC-0000` + Math.floor(Math.random() * 999),
      name: newInvoiceName,
    };
    setInvoiceListUsers([...invoiceListUsers, tempObj]);
  };

  const drawerMenuData = [
    {
      id: 1,
      name: 'Dashboard',
      bgColor: showDashboard,
      icon: <DashboardIcon />,
    },
    {
      id: 2,
      name: 'Invoice',
      bgColor: showInvoice,
      icon: <ReceiptIcon />,
    },
    {
      id: 3,
      name: 'Sales order',
      // bgColor: showInvoice,
      icon: <ShoppingBasketIcon />,
    },
    {
      id: 4,
      name: 'Vendors',
      // bgColor: showInvoice,
      icon: <FactoryIcon />,
    },
    {
      id: 5,
      name: 'Customer Details',
      bgColor: showCustomerDetails,
      icon: <PersonIcon />,
    },
    {
      id: 6,
      name: 'Inventory',
      // bgColor: showInvoice,
      icon: <InventoryIcon />,
    },
    {
      id: 7,
      name: 'Products',
      bgColor: showProduct,
      icon: <LocalGroceryStoreIcon />,
    },
    {
      id: 8,
      name: 'Reports',
      // bgColor: showInvoice,
      icon: <AssessmentIcon />,
    },
    {
      id: 9,
      name: 'Org',
      bgColor: showOrg,
      icon: <StoreIcon />,
    },
    {
      id: 10,
      name: 'Purchase Order',
      // bgColor: showOrg,
      icon: <DescriptionIcon />,
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#62959D' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            NoCache
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#91b5ba',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography
            sx={{
              cursor: 'pointer',
              position: 'relative',
              marginRight: '3rem',
            }}
          >
            Menu
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerMenuData.map((e) => {
            return (
              <ListItem disablePadding key={e.id}>
                <ListItemButton
                  sx={{ bgcolor: e.bgColor ? '#45686e' : '' }}
                  onClick={(event) => drawerMenuDataOnClick(event, e.name)}
                >
                  <ListItemIcon>{e.icon}</ListItemIcon>
                  <ListItemText primary={e.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Grid>
          {showInvoice && (
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <Grid>
                <InvoiceList
                  InvoiceListOnClick={invoiceListOnClick}
                  newInoviceOnClick={newInoviceOnClick}
                  InoviceListData={invoiceListUsers}
                />
              </Grid>
              <Grid>
                {showInvoiceContent && (
                  <React.Fragment>
                    <InvoiceContent invoiceContentData={invoiceContentData} />
                    <InvoiceData
                      invoiceListData={invoiceDataColumn}
                      rows={invoiceTableColumn}
                    />
                  </React.Fragment>
                )}
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid>{showDashboard && <DashboardChart />}</Grid>
        <Grid>
          {showOrg && <Organization organizationData={organizationData} />}
        </Grid>
        <Grid>{showProduct && <Product />}</Grid>
        <Grid>{showCustomerDetails && <CustomerDetails />}</Grid>
        <NewCustomerInvoice
          open={openNewCustomerInvoice}
          OnClose={newCustomerInvoiceOnClose}
          setNewInvoiceName={setNewInvoiceName}
          setNewInvoiceEmail={setNewInvoiceEmail}
          setNewInvoiceAddress={setNewInvoiceAddress}
          setNewInvoicePhone={setNewInvoicePhone}
          newInvoiceSubmitOnClick={newInvoiceSubmitOnClick}
        />
      </Main>
    </Box>
  );
};

export default HomePage;
