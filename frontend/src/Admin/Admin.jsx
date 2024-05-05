import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import Customers from "./components/Customers";
import Dashboard from "./components/Dashboard";
import OrdersForm from "./components/OrdersForm";
import Products from "./components/Products";
const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "All Products", path: "/admin/products", icon: <DashboardIcon /> },
  { name: "Customer", path: "/admin/customers", icon: <DashboardIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
  {
    name: "AddProduct",
    path: "/admin/product/create",
    icon: <DashboardIcon />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <>
        {isLargeScreen && <Toolbar />}
        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="relative">
      <div className=" relative flex h-[100vh]  ">
        <CssBaseline />
        <div className="w-[15%] border border-r-gray-300 h-full sticky top-0 ">
          {drawer}
        </div>

        <div className="w-[85%] h-full ">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/product/create" element={<CreateProduct />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/orders" element={<OrdersForm />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
