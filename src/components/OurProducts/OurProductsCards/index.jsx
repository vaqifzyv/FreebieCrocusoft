// import React, { useState } from "react";
// import {
//   useGetProductsQuery,
//   // useAddProductsToBasketMutation,
// } from "/src/redux/api/prApi.js";
// import Typography from "@mui/material/Typography";
// import { RenderIf } from "../..";
// import Button from "@mui/material/Button";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import Snackbar from "@mui/material/Snackbar";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   addToBasket,
//   addToWishList,
//   removeFromWishList,
// } from "../../../redux/features/Basket/index";

// function OurProductsCards({ products }) {
//   const dispatch = useDispatch();
//   const wishList = useSelector((state) => state.basket.wishList);
//   const [open, setOpen] = React.useState(false);

//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }

//     setOpen(false);
//   };

//   const handleAddToBasket = (product) => {
//     dispatch(addToBasket(product));
//     setOpen(true);
//   };

//   const action = (
//     <React.Fragment>
//       <IconButton
//         size="small"
//         aria-label="close"
//         color="inherit"
//         onClick={handleClose}
//       >
//         <CloseIcon fontSize="small" />
//       </IconButton>
//     </React.Fragment>
//   );
//   const handleToggleWishList = (product) => {
//     const isInWishList = wishList.some((item) => item.id === product.id);
//     if (isInWishList) {
//       dispatch(removeFromWishList(product));
//     } else {
//       dispatch(addToWishList(product));
//     }
//   };

//   const isItemInWishList = (productId) => {
//     return wishList.some((item) => item.id === productId);
//   };

//   const { data = [], isLoading } = useGetProductsQuery();

//   console.log(data);

//   if (isLoading) return <h1>{"loading"}</h1>;

//   return (
//     <div className="ourProductsBottom">
//       <Typography
//         variant="h3"
//         color="initial"
//         className="ourProductsBottomCenterText"
//       >
//         Our Products
//       </Typography>
//       <div className="ourProductsCards">
//         {data.map((card) => (
//           <div key={card.id} className="ourProductsCard">
//             <img src={card.image} className="ourProductsImg" alt={card.name} />
//             {/* <div className="disStatus">
//               <RenderIf
//                 condition={card.discount == null && card.status != null}
//               >
//                 <p className="cardStatus">{card.status}</p>
//               </RenderIf>
//               <RenderIf
//                 condition={card.status == null && card.discount != null}
//               >
//                 <p className="cardDiscount">{card.discount}</p>
//               </RenderIf>
//             </div> */}
//             <div className="ourProductsCardBottom">
//               <div>
//                 <h2
//                   className="ourProductsCardName"
//                   style={{ fontSize: "14px" }}
//                 >
//                   {card.title}
//                 </h2>
//               </div>
//               <div className="ourProductsCardDescription">
//                 <p style={{ fontSize: "12px" }}>{card.description}</p>
//               </div>
//               <div className="prices">
//                 <Typography color="initial" className="cardPrice">
//                   $ {card.price}
//                 </Typography>
//               </div>
//             </div>

//             <div className="hoverContent">
//               <Button
//                 onClick={() => handleAddToBasket(card)}
//                 variant="contained"
//                 className="addToCartBtn"
//                 sx={{
//                   background: "white",
//                   color: "#E89F71",
//                   fontSize: "12px",
//                   paddingBlock: "10px",
//                   paddingInline: "20px",
//                 }}
//               >
//                 Add to cart
//               </Button>
//               <div className="socialIcons">
//                 <Button variant="text">
//                   <ShareOutlinedIcon />
//                   Share
//                 </Button>
//                 <Button
//                   variant="text"
//                   onClick={() => handleToggleWishList(card)}
//                 >
//                   {isItemInWishList(card.id) ? (
//                     <FavoriteIcon />
//                   ) : (
//                     <FavoriteBorderOutlinedIcon />
//                   )}
//                   Like
//                 </Button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Snackbar
//         open={open}
//         autoHideDuration={800}
//         onClose={handleClose}
//         message="Item added to basket!"
//         action={action}
//       />
//     </div>
//   );
// }

// export default OurProductsCards;
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/api/prApi";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import {
  addToBasket,
  addToWishList,
  removeFromWishList,
} from "../../../redux/features/Basket/index";

function OurProductsCards() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.basket.wishList);
  const [open, setOpen] = React.useState(false);

  const { data = [], isLoading, refetch } = useGetProductsQuery();

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleAddToBasket = (product) => {
    dispatch(addToBasket(product));
    setOpen(true);
  };

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

  const handleToggleWishList = (product) => {
    const isInWishList = wishList.some((item) => item.id === product.id);
    if (isInWishList) {
      dispatch(removeFromWishList(product));
    } else {
      dispatch(addToWishList(product));
    }
  };

  const isItemInWishList = (productId) => {
    return wishList.some((item) => item.id === productId);
  };

  if (isLoading) return <h1>{"loading"}</h1>;

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };
  console.log(data);
  return (
    <div className="ourProductsBottom">
      <Typography
        variant="h3"
        color="initial"
        className="ourProductsBottomCenterText"
      >
        Our Products
      </Typography>
      <div className="ourProductsCards">
        {data.map((card) => (
          <div
            key={card.id}
            className="ourProductsCard"
            onClick={() => handleCardClick(card.id)}
          >
            <img src={card.image} className="ourProductsImg" alt={card.name} />
            <div className="ourProductsCardBottom">
              <div>
                <h2
                  className="ourProductsCardName"
                  style={{ fontSize: "14px" }}
                >
                  {card.title}
                </h2>
              </div>
              <div className="ourProductsCardDescription">
                <p style={{ fontSize: "12px" }}>{card.description}</p>
              </div>
              <div className="prices">
                <Typography color="initial" className="cardPrice">
                  $ {card.price}
                </Typography>
              </div>
            </div>

            <div className="hoverContent">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToBasket(card);
                }}
                variant="contained"
                className="addToCartBtn"
                sx={{
                  background: "white",
                  color: "#E89F71",
                  fontSize: "12px",
                  paddingBlock: "10px",
                  paddingInline: "20px",
                }}
              >
                Add to cart
              </Button>
              <div className="socialIcons">
                <Button variant="text">
                  <ShareOutlinedIcon />
                  Share
                </Button>
                <Button
                  variant="text"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleWishList(card);
                  }}
                >
                  {isItemInWishList(card.id) ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderOutlinedIcon />
                  )}
                  Like
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Snackbar
        open={open}
        autoHideDuration={800}
        onClose={handleClose}
        message="Item added to basket!"
        action={action}
      />
    </div>
  );
}

export default OurProductsCards;
