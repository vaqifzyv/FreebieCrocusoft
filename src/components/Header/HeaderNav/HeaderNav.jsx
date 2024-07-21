import React, { useState, useEffect } from "react";
import "./headernav.css";
import { useGetProductsQuery } from "/src/redux/api/prApi.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromBasket,
  removeFromWishList,
} from "../../../redux/features/Basket/index";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 600,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
  height: "60vh",
  overflow: "auto",
};

const modalContentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
};

const modalHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginBottom: 10,
};

const closeButtonStyle = {
  cursor: "pointer",
  color: "#666",
};

function HeaderNav() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const wishList = useSelector((state) => state.basket.wishList);

  const handleRemoveFromBasket = (product) => {
    dispatch(removeFromBasket(product));
  };

  const handleRemoveFromWishList = (product) => {
    dispatch(removeFromWishList(product));
  };

  const { data = [], isLoading } = useGetProductsQuery();
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [openFav, setOpenFav] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);

  const handleOpenFav = () => setOpenFav(true);
  const handleCloseFav = () => setOpenFav(false);
  const handleOpenBasket = () => setOpenBasket(true);
  const handleCloseBasket = () => setOpenBasket(false);

  useEffect(() => {
    if (search) {
      const results = data.filter((product) => {
        const title = product.title.toLowerCase();
        const searchTerm = search.toLowerCase();
        let match = true;
        for (let i = 0; i < searchTerm.length; i++) {
          if (!title.includes(searchTerm.substring(0, i + 1))) {
            match = false;
            break;
          }
        }
        return match;
      });
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [search, data]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="headerNav">
      <div className="navLeft">
        <Link to="/">
          <Typography variant="h5" color="initial" sx={{ fontWeight: "600" }}>
            Funiro.
          </Typography>
        </Link>
        <div className="navLinks">
          <ul>
            <li>
              <a href="#">
                Products <KeyboardArrowDownOutlinedIcon />
              </a>
            </li>
            <li>
              <a href="#">
                Rooms <KeyboardArrowDownOutlinedIcon />
              </a>
            </li>
            <Link to="/addProduct">
              <Typography variant="p" color="initial">
                Add New Product.
              </Typography>
            </Link>
          </ul>
        </div>
        <div className="searchBar">
          <TextField
            id="searchText"
            label="Search for minimalist chair"
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <div className="searchCards">
              {filteredProducts.map((product) => (
                <div key={product.id} className="searchCard">
                  <div className="searchCardImg">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: "14px" }}>{product.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="navRight">
        <IconButton onClick={handleOpenFav}>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton onClick={handleOpenBasket}>
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </div>
      <Modal open={openFav} onClose={handleCloseFav}>
        <Box sx={{ ...modalStyle }}>
          <Box sx={{ ...modalHeaderStyle }}>
            <Typography variant="h6" component="h2">
              Favourites
            </Typography>
            <CloseIcon onClick={handleCloseFav} style={closeButtonStyle} />
          </Box>
          <Box sx={{ ...modalContentStyle }}>
            {wishList.length === 0 ? (
              <Typography variant="body1">No items in favourites.</Typography>
            ) : (
              wishList.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: 10,
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: 5,
                  }}
                >
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: "75px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography>{item.title}</Typography>
                  <Button
                    onClick={() => handleRemoveFromWishList(item)}
                    variant="outlined"
                    color="secondary"
                  >
                    Remove
                  </Button>
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Modal>
      <Modal open={openBasket} onClose={handleCloseBasket}>
        <Box sx={{ ...modalStyle }}>
          <Box sx={{ ...modalHeaderStyle }}>
            <Typography variant="h6" component="h2">
              Basket
            </Typography>
            <CloseIcon onClick={handleCloseBasket} style={closeButtonStyle} />
          </Box>
          <Box sx={{ ...modalContentStyle }}>
            {basket.length === 0 ? (
              <Typography variant="body1">No items in basket.</Typography>
            ) : (
              basket.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: 10,
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: 5,
                  }}
                >
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: "75px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography>
                    {item.title} ({item.quantity}x)
                  </Typography>
                  <Button
                    onClick={() => handleRemoveFromBasket(item)}
                    variant="outlined"
                    color="secondary"
                  >
                    Remove
                  </Button>
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default HeaderNav;
