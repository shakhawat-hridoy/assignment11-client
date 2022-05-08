import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();

  const year = date.getFullYear();
  return (
    <section>
      <footer className="px-2 py-4">
        <div className="container d-flex   flex-sm-column flex-md-row flex-lg-row justify-content-lg-between">
          <div>
            <h6>&copy; Mr. Shakhawat reserves all its right.</h6>
            <h6>Perfumo {year}</h6>
          </div>

          <div className="mt-sm-3 mt-md-0 ms-md-auto mt-lg-0">
            <h6>Contact us</h6>
            <p>
              <small>Panthapath , Dhaka-1205</small>
              <br />
              <span>
                <small>
                  <b>Phone: </b>999999999
                </small>
                <br />
                <small>
                  <b>email:</b> emailadress@mail.com
                </small>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
