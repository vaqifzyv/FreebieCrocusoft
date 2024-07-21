// import React from "react";
// import "./inspirationsection.css";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import insPh1 from "../../assets/inspirationPh1.png";
// import insPh2 from "../../assets/inspirationPh2.png";
// import insPh3 from "../../assets/inspirationPh3.png";

// function InspirationSection() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="inspirationSection">
//       <div className="inspirationLeft">
//         <Typography variant="h4" color="initial">
//           50+ Beautiful rooms inspiration
//         </Typography>
//         <Typography variant="p" color="initial">
//           Our designer already made a lot of beautiful prototipe of rooms that
//           inspire you
//         </Typography>
//       </div>
//       <div className="inspirationRight">
//         {" "}
//         <Slider {...settings}>
//           <div>
//             <img src={insPh1} />
//           </div>
//           <div>
//             <img src={insPh2} />
//           </div>
//           <div>
//             <img src={insPh3} />
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default InspirationSection;import React from "react";
import "./inspirationsection.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import insPh1 from "../../assets/inspirationPh1.png";
import insPh2 from "../../assets/inspirationPh2.png";
import insPh3 from "../../assets/inspirationPh3.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ff7f50", zIndex: 99 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ff7f50", zIndex: 99 }}
      onClick={onClick}
    />
  );
}

function InspirationSection() {
  const settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "33%",
  };

  return (
    <div className="inspirationSection">
      <div className="inspirationLeft">
        <Typography variant="h4" color="initial" gutterBottom>
          50+ Beautiful rooms inspiration
        </Typography>
        <Typography variant="body1" color="initial" paragraph>
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you
        </Typography>
        <Button variant="contained" color="primary" className="exploreButton">
          Explore More
        </Button>
      </div>
      <div className="inspirationRight">
        <Slider {...settings}>
          <div className="slide">
            <img src={insPh1} alt="Inspiration 1" />
            <div className="slideCaption">
              <Typography variant="body2">01 — Bed Room</Typography>
              <Typography variant="h6">Inner Peace</Typography>
            </div>
          </div>
          <div className="slide">
            <img src={insPh2} alt="Inspiration 2" />
            <div className="slideCaption">
              <Typography variant="body2">02 — Living Room</Typography>
              <Typography variant="h6">Cozy Corner</Typography>
            </div>
          </div>
          <div className="slide">
            <img src={insPh3} alt="Inspiration 3" />
            <div className="slideCaption">
              <Typography variant="body2">03 — Kitchen</Typography>
              <Typography variant="h6">Modern Touch</Typography>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default InspirationSection;
