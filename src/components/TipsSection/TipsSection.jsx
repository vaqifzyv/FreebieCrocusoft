import React from "react";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tipsPh1 from "../../assets/tipsPh1.png";
import tipsPh2 from "../../assets/tipsPh2.png";
import tipsPh3 from "../../assets/tipsPh3.png";
import "./tipssection.css";

function TipsSection() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="tipsSection">
      <div className="tipsSectionTop">
        <Typography variant="h1" sx={{ fontSize: "56px", fontWeight: 500 }}>
          Tips & Tricks{" "}
        </Typography>
      </div>
      <div className="">
        {" "}
        <div className="slider-container">
          <Slider {...settings}>
            <div className="sliderItem">
              <div className="sliderPh">
                <img src={tipsPh1} alt="" />
              </div>
              <div className="sliderText">
                <Typography variant="h5">
                  How to create a living room to love
                </Typography>
                <Typography variant="p">20 jan 2020</Typography>
              </div>
            </div>
            <div className="sliderItem">
              <div className="sliderPh">
                <img src={tipsPh2} alt="" />
              </div>
              <div className="sliderText">
                <Typography variant="h5">
                  Solution for clean look working space
                </Typography>
                <Typography variant="p">10 jan 2020</Typography>
              </div>
            </div>
            <div className="sliderItem">
              <div className="sliderPh">
                <img src={tipsPh2} alt="" />
              </div>
              <div className="sliderText">
                <Typography variant="h5">
                  Make your cooking activity more fun with good setup
                </Typography>
                <Typography variant="p">20 jan 2020</Typography>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TipsSection;
