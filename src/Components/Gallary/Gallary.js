import React from "react";
import DigitBanner from "./DigitBanner/DigitBanner";
import PhotoGallary from "./Photogallary/PhotoGallary";

const Gallary = () => {
  return (
    <div className="mar-20">
      <div className="text-center my-5 py-5">
        <h3>Check our gallary to know more</h3>
      </div>
      <PhotoGallary></PhotoGallary>
      <DigitBanner></DigitBanner>
    </div>
  );
};

export default Gallary;
