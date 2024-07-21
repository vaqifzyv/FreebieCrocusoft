import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/prApi";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Snackbar from "@mui/material/Snackbar";
import HeaderNav from "../components/Header/HeaderNav/HeaderNav";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/features/Basket";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function ProductDetails() {
  const { id } = useParams();
  const { data: products = [], isLoading } = useGetProductsQuery();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleAddToBasket = (product) => {
    dispatch(addToBasket(product));
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Container>
      <HeaderNav />
      <Box my={4}>
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{ width: "250px", height: "auto", borderRadius: 2 }}
          />
          <Typography
            variant="body1"
            paragraph
            mt={2}
            sx={{ textAlign: "center" }}
          >
            {product.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Price: ${product.price}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={() => handleAddToBasket(product)}
          >
            Add to Basket
          </Button>
        </Paper>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Item added to basket!"
        action={action}
      />
    </Container>
  );
}

export default ProductDetails;
