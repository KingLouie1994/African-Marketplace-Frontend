import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import axiosWithAuth from "./axiosWithAuth";

function ItemsList(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`https://lbs-african-marketplace.herokuapp.com/items/`)
      .then(response => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <h1>List of your Items:</h1>
      {items.map((items, index) => {
        return <ItemCard key={index} items={items} />;
      })}
    </section>
  );
}
export default ItemsList;
