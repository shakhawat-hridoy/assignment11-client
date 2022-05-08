import React from "react";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardGroup1 = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100 border-0 p-3 rounded ">
            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
            <div className="card-body">
              <h5 className="card-title">Awesome Quality</h5>
              <p className="card-text">
                While buying these kinda product, trust is very important. The
                don't compromize with the quality ever.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-0 p-3 rounded ">
            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
            <div className="card-body">
              <h5 className="card-title">Huge Collection</h5>
              <p className="card-text">
                This dealer has extraordinary collections from all over the
                world. Anyone can trust them.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-0 p-3 rounded ">
            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
            <div className="card-body">
              <h5 className="card-title">Customer Friendly</h5>
              <p className="card-text">
                In any kind of business, saler behaviour is considered as the
                most important thing. They will surely get 10/10 in this.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGroup1;
