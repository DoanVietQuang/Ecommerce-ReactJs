import { Avatar, Card, CardHeader } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../State/Product/Action";

const ProductsView = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store);

  console.log("Products", product);

  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 10,
      stock: "",
    };
    dispatch(findProducts(data));
  }, []);

  return (
    <div className="p-5 ">
      <Card className="mt-2 bg-[#1b1b1b]" sx={{}}>
        <CardHeader title=" Products" />
      </Card>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.products?.content?.map((item) => (
              <TableRow
                key={item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <Avatar src={item.imageUrl}></Avatar>
                </TableCell>
                <TableCell align="left">{item.title}</TableCell>
                <TableCell align="left">{item.category.name}</TableCell>
                <TableCell align="left">${item.price}</TableCell>
                <TableCell align="left">{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductsView;
