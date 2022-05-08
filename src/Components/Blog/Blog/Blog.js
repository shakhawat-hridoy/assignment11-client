import React from "react";
import Q1 from "../Q1/Q1";
import Q2 from "../Q2/Q2";
import Q3 from "../Q3";

const Blog = () => {
  return (
    <div className="mar-20" data-aos="fade-up">
      <div className="text-center">
        <h2 className="fw-bold">Learning web??</h2>
        <p className="fw-bold">Don't forget to learn these</p>
      </div>

      <article>
        <Q1></Q1>
        <Q2></Q2>
        <Q3></Q3>
      </article>
    </div>
  );
};

export default Blog;
