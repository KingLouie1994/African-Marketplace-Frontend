import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import FilteredItems from "./FilteredItems";
import axiosWithAuth from "./axiosWithAuth";

function ItemsList(props) {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("All Items");

  useEffect(() => {
    axiosWithAuth()
      .get(`https://lbs-african-marketplace.herokuapp.com/items/`)
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const categories = [];

  items.forEach(item => {
    categories.push(item.category);
  });

  const uniqueCategories = [...new Set(categories)];

  function handleChange(event) {
    setValue(event.target.value);
  }

  if (value === "All Items") {
    return (
      <div>
        <select onChange={handleChange}>
          <option value="All Items">All Items</option>
          {uniqueCategories.map((uniqueItem, index) => {
            return (
              <option key={index} value={`${uniqueItem}`}>
                {uniqueItem}
              </option>
            );
          })}
        </select>

        <section>
          <h1>List of all Items:</h1>
          {items.map((items, index) => {
            return <ItemCard key={index} items={items} />;
          })}
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <select onChange={handleChange}>
          <option value="All Items">All Items</option>
          {uniqueCategories.map((uniqueItem, index) => {
            return (
              <option key={index} value={`${uniqueItem}`}>
                {uniqueItem}
              </option>
            );
          })}
        </select>
        <FilteredItems uniqueCategories={uniqueCategories} value={value} />
      </div>
    );
  }
}

export default ItemsList;
