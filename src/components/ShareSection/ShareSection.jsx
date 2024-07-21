import React from "react";
import "./sharesection.css";
import Typography from "@mui/material/Typography";
import funiroPh1 from "../../assets/funiroPh1.png";
import funiroPh2 from "../../assets/funiroPh2.png";
import funiroPh3 from "../../assets/funiroPh3.png";
import funiroPh4 from "../../assets/funiroPh4.png";
import funiroPh5 from "../../assets/funiroPh5.png";
import funiroPh6 from "../../assets/funiroPh6.png";
import funiroPh7 from "../../assets/funiroPh7.png";
import funiroPh8 from "../../assets/funiroPh8.png";
import funiroPh9 from "../../assets/funiroPh9.png";

function ShareSection() {
  return (
    <div className="shareSection">
      <div className="shareSectionTop">
        <Typography variant="p">Share your setup with</Typography>
        <Typography variant="h4">#FuniroFurniture</Typography>
      </div>
      <div className="shareSectionPhotos">
        <img src={funiroPh1} />
        <img src={funiroPh2} />
        <img src={funiroPh3} />
        <img src={funiroPh4} />
        <img src={funiroPh5} />
        <img src={funiroPh6} />
        <img src={funiroPh7} />
        <img src={funiroPh8} />
        <img src={funiroPh9} />
      </div>
    </div>
  );
}

export default ShareSection;
