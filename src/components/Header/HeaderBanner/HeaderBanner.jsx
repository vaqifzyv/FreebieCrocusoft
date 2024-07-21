import React from "react";
import "./headerbanner.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderPh1 from "../../../assets/headerPh1.png";
import HeaderPh2 from "../../../assets/headerPh2.png";
import HeaderPh3 from "../../../assets/headerPh3.png";

function HeaderBanner() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "25%",
  };

  return (
    <div className="headerBanner">
      <div className="JustForYouBannerBehind">
        <Slider {...settings}>
          <div>
            <img src={HeaderPh1} />
            <div className="bannerBehindDiv">
              <Typography variant="h6" color="initial">
                Bohauss
              </Typography>
              <Typography variant="p" color="initial">
                Luxury big sofa
              </Typography>
              <Typography variant="h6" color="initial">
                Rp 6.000.000
              </Typography>
            </div>
          </div>
          <div>
            <img src={HeaderPh2} />
            <div className="bannerBehindDiv">
              <Typography variant="h6" color="initial">
                Syltherine
              </Typography>
              <Typography variant="p" color="initial">
                Stylish cafe chair
              </Typography>
              <Typography variant="h6" color="initial">
                Rp 2.500.000
              </Typography>
            </div>
          </div>
          <div>
            <img src={HeaderPh3} />
            <div className="bannerBehindDiv">
              <Typography variant="h6" color="initial">
                Respira
              </Typography>
              <Typography variant="p" color="initial">
                Minimalist fan
              </Typography>
              <Typography variant="h6" color="initial">
                Rp 5.000.000
              </Typography>
            </div>
          </div>
        </Slider>
      </div>
      <div className="justForYouBanner">
        <Typography
          variant="h2"
          color="#3A3A3A"
          sx={{ fontWeight: 600, fontSize: "45px" }}
        >
          High-Quality Furniture Just For You
        </Typography>
        <Typography variant="p" color="#898989" sx={{ fontWeight: 300 }}>
          Our furniture is made from selected and best quality materials that
          are suitable for your dream home
        </Typography>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#e89f71",
            fontSize: "14px",
            padding: "16px 16px",
            marginTop: "30px",
            width: "100%",
          }}
          className="justForYouBannerButton"
        >
          Show Now
        </Button>
      </div>
    </div>
  );
}

export default HeaderBanner;
