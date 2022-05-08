import React from "react";
import { Link } from "react-router-dom";
import GetPerfume from "../../../Hooks/getPerfume";
import Loading from "../../Loading/Loading";
import Perfume from "../Perfume/Perfume";
import "./Inventories.css";

const Inventories = () => {
  let isLoad = true;

  const [items, setItems] = GetPerfume();

  let newItems;
  newItems = [...items];

  if (newItems.length !== 0) {
    isLoad = false;
  }

  const perfumes = newItems.slice(0, 6);

  return (
    <div className="mar-20">
      <div data-aos="fade-up" className="container">
        <h2 className="text-center py-4 my-4">Our Inventory</h2>
        {isLoad ? <Loading className="my-5 py-5"></Loading> : null}
        <div className="row row-cols-1 row-cols-md-3 g-5">
          {perfumes.map((item) => (
            <Perfume key={item._id} perfume={item}></Perfume>
          ))}
        </div>

        <div data-aos="fade-up" className="text-center">
          <Link to="/manageInventories">
            <button className=" mng-btn rounded">Manage Your Invenories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventories;
