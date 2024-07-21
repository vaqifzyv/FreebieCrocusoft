import React from "react";
import "../ourproducts.css";

import photo1 from "../../../assets/vector/cup.png";
import photo2 from "../../../assets/vector/done.png";
import photo3 from "../../../assets/vector/shipping.png";
import photo4 from "../../../assets/vector/support.png";

const features = [
  {
    icon: photo1,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: photo2,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: photo3,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: photo4,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

function OurProductsTop() {
  return (
    <div className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature">
          <img src={feature.icon} />
          <div className="featureTexts">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurProductsTop;
