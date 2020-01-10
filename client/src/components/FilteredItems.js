import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import axiosWithAuth from "./axiosWithAuth";

function FilteredItems(props) {
  const [items, setitems] = useState([]);

  axiosWithAuth(props.value)
    .get(
      `https://lbs-african-marketplace.herokuapp.com/items/category/${props.value}`
    )
    .then(response => {
      setitems(response.data);
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <div>
      <section>
        <h1>List of all Items:</h1>
        {items.map((items, index) => {
          return <ItemCard key={index} items={items} />;
        })}
      </section>
    </div>
  );
}

export default FilteredItems;
