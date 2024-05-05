import { Grid } from "@mui/material";
import React from "react";
import OrdersFormView from "../views/OrdersFormView";
import ProductsView from "../views/ProductsView";
import Achivement from "./Achivement";
import MonthlyOverview from "./MonthlyOverview";

const Dashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Achivement />
        </Grid>
        <Grid item xs={12} md={8}>
          <MonthlyOverview />
        </Grid>
        <Grid item xs={12} md={6}>
          <OrdersFormView />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductsView />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
