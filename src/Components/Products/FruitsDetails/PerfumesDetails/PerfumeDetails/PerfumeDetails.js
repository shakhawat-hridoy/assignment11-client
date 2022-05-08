import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddQuantity from "../../AddQuantity/AddQuantity";
import ProductDetailesTable from "../../ProductDetailsTable/ProductDetailesTable";
import "./PerfumeDetails.css";

const PerfumeDetailes = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `https://assignment-11-hridoy.herokuapp.com/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const handleDelivered = () => {
    let newItem = { ...item };
    newItem.Quantity -= 1;
    newItem.sale += 1;

    handleItemDelivered(newItem);
    setItem(newItem);
  };

  const handleRestock = (event) => {
    event.preventDefault();

    const amount = event.target.amount.value;
    let newItem = { ...item };
    const newQuantity = parseInt(amount);
    newItem.Quantity += newQuantity;

    handleItemRestock(newItem);

    setItem(newItem);
  };

  async function handleItemRestock(item) {
    const url = `https://assignment-11-hridoy.herokuapp.com/restock/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  const handleItemDelivered = (item) => {
    const url = `https://assignment-11-hridoy.herokuapp.com/delivered/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="mar-20">
      <ProductDetailesTable item={item}></ProductDetailesTable>
      <div className="text-center">
        <button className="deliver-btn" onClick={handleDelivered}>
          Delivered
        </button>
      </div>
      <AddQuantity reStock={handleRestock}></AddQuantity>
    </div>
  );
};

export default PerfumeDetailes;
