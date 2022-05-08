import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();

  const year = date.getFullYear();
  return (
    <section>
      <footer className="p-5">
        <div className="container d-flex justify-content-between">
          <div>
            <h3>Copyright &copy; {year}</h3>
            <h3>To Shakhawat</h3>
          </div>

          <div>
            <h4>Contact us</h4>
            <p>Panthapath , Dhaka-1205</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
