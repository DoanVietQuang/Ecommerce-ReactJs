import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { Avatar, Button, Card, CardHeader, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store);
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
    const searchPage = new URLSearchParams(location.search);
    searchPage.set("page", value);
    const query = searchPage.toString();
    navigate({ search: `?${query}` });
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get("page")) || 1;
    setCurrentPage(page);
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: page - 1,
      pageSize: 6,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [location.search, product.deletedProduct]);

  return (
    <div className="p-5 ">
      <Card className="mt-2 bg-[#1b1b1b]" sx={{}}>
        <CardHeader title="All Products" />
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
              <TableCell align="left">Delete</TableCell>
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
                <TableCell align="left">
                  <Button
                    onClick={() => handleDeleteProduct(item.id)}
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
      <section className="w-full px=[3.6rem]">
        <div className="px-4 py-5 flex justify-center">
          <Pagination
            count={product.products?.totalPages || 1}
            page={currentPage}
            color="secondary"
            onChange={handlePaginationChange}
          />
        </div>
      </section>
    </div>
  );
};

export default Products;
