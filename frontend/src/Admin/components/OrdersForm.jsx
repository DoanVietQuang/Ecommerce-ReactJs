import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../State/Admin/Orders/Action";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, AvatarGroup, Button, Card, CardHeader } from "@mui/material";
const OrdersForm = () => {
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);

  const handleClose = (index) => {
    const newAnChorElArray = [...anchorEl];
    newAnChorElArray[index] = null;
    setAnchorEl(newAnChorElArray);
  };

  const handelClick = (event, index) => {
    const newAnChorElArray = [...anchorEl];
    newAnChorElArray[index] = event.currentTarget;
    setAnchorEl(newAnChorElArray);
  };

  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  const handelShippedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  };
  const handelConfirmOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };
  const handelDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    handleClose();
  };
  const handelDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered,adminOrder.deletedOrder]);
  console.log("admin orders", adminOrder);
  return (
    <div className="p-10">
      <Card className="mt-2 bg-[#1b1b1b]" sx={{}}>
        <CardHeader title="Orders" />
      </Card>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Total Price</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Update</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adminOrder.orders?.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="" className="">
                  <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                    {item.orderItems.map((orderItem) => (
                      <Avatar src={orderItem.product.imageUrl}></Avatar>
                    ))}
                  </AvatarGroup>
                </TableCell>
                <TableCell align="left">
                  {item.orderItems.map((orderItem) => (
                    <p>{orderItem.product.title}</p>
                  ))}
                </TableCell>
                <TableCell align="left">{item.id}</TableCell>
                <TableCell align="left">${item.totalPrice}</TableCell>
                <TableCell align="left">
                  <span
                    className={` text-white px-5 py-2 rounded-full ${
                      item.orderStatus === "CONFIRMED"
                        ? "bg-[#45CE30]"
                        : item.orderStatus === "SHIPPED"
                        ? "bg-[#0A79DF]"
                        : item.orderStatus === "PENDING"
                        ? "bg-[#99AAAB]"
                        : item.orderStatus === "PLACED"
                        ? "bg-[#02B290]"
                        : " bg-[#E71C23]"
                    }`}
                  >
                    {item.orderStatus}
                  </span>
                </TableCell>
                <TableCell align="left">
                  <Button
                    id="basic-button"
                    aria-haspopup="true"
                    onClick={(event) => handelClick(event, index)}
                    aria-controls={`basic-menu-${item.id}`}
                    aria-expanded={Boolean(anchorEl[index])}
                  >
                    Status
                  </Button>
                  <Menu
                    id={`basic-menu-${item.id}`}
                    anchorEl={anchorEl[index]}
                    open={Boolean(anchorEl[index])}
                    onClose={() => handleClose(index)}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={() => handelConfirmOrder(item.id)}>
                      CONFIRM ORDER
                    </MenuItem>
                    <MenuItem onClick={() => handelShippedOrder(item.id)}>
                      SHIPPED ORDER
                    </MenuItem>
                    <MenuItem onClick={() => handelDeliveredOrder(item.id)}>
                      DELIVERED ORDER
                    </MenuItem>
                  </Menu>{" "}
                </TableCell>
                <TableCell align="left">
                  <Button
                    onClick={() => handelDeleteOrder(item.id)}
                    variant="outlined"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrdersForm;
