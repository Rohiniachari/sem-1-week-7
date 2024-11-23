// GroceryList.js
import React from "react";

const GroceryList = () => {
  // Array of grocery items
  const groceryItems = ["Milk", "Bread", "Cheese", "Eggs", "Butter"];

  return (
    <div>
      <h2>Grocery List</h2>
      <ul>
        {groceryItems.map((item, index) => (
          <li key={index}>{item}</li> // Use index as key for simplicity
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
