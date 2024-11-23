import React from "react";

const CategoryList = () => {
  const categories = [
    {
      name: "Fruits",
      items: ["Apple", "Banana", "Orange"],
    },
    {
      name: "Vegetables",
      items: ["Carrot", "Potato", "Cucumber"],
    },
    {
      name: "Dairy",
      items: ["Milk", "Cheese", "Yogurt"],
    },
  ];

  return (
    <div>
      <h2>Category List</h2>
      {categories.map((category, index) => (
        <div key={index}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
