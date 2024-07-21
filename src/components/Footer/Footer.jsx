import React from "react";
import "./footer.css";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";

function Footer() {
  return (
    <div className="footerSection">
      <div className="footerSectionleft">
        <Typography variant="h4" className="footerHeaders">
          Funiro.
        </Typography>
        <Typography variant="p">
          Worldwide furniture store since 2020. We sell over 1000+ branded
          products on our website
        </Typography>
        <Typography
          variant="p"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <LocationOnIcon />
          Sawojajar Malang, Indonesia
        </Typography>
        <Typography
          variant="p"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <LocalPhoneIcon />
          +6289 456 3455
        </Typography>
        <Typography variant="p">www.funiro.com</Typography>
      </div>
      <div className="footerCenterLinks">
        <div className="footerCenterLinksFirst">
          <Typography variant="h4" className="footerHeaders">
            Menu
          </Typography>
          <ul>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Rooms</a>
            </li>
            <li>
              <a href="#">Inspirations</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Terms & Policy</a>
            </li>
          </ul>
        </div>
        <div className="footerCenterLinksSecond">
          <Typography variant="h4" className="footerHeaders">
            Account
          </Typography>
          <ul>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Checkout</a>
            </li>
            <li>
              <a href="#">My Cart</a>
            </li>
            <li>
              <a href="#">My catalog</a>
            </li>
          </ul>
        </div>
        <div className="footerCenterLinksFirst">
          <Typography variant="h4" className="footerHeaders">
            Stay Connected
          </Typography>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerSectionRight">
        <Typography variant="h4" className="footerHeaders">
          Stay Updated
        </Typography>
        <div className="footerSectionRightEmail">
          <TextField id="email" label="Enter your email" />
          <IconButton>
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Footer;
