import { Alert, AlertTitle, Grid } from "@mui/material";
import React from "react";
import OrderTracker from "../Order/OrderTracker";

const PaymentSuccess = () => {
  return (
    <div className="px-2 mx-20 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation Your Order Get Placed
        </Alert>
      </div>
      <OrderTracker activeStep={1} />

      <Grid container className=" space-y-5 py-5 pt-20 ">
        {[1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5  "
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className=" flex items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/27fd4c90-314f-4609-8f36-d7fca3b488f1/jordan-dri-fit-sport-golf-polo-pclvPv.png"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Men Shirt Nike </p>
                  <p className="space-x-5 opacity-60 text-xs font-semibold">
                    <span>Color: Black</span>
                    <span>Size: M</span>
                  </p>
                  <p>Seller: Oriz</p>
                  <p>$199</p>
                </div>
              </div>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
