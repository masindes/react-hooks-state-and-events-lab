import React, { useState } from "react";

function Item({ name, category }) {
  const [chart, setChart] = useState(false);
  const chartHandler = () => {
    setChart(!chart);
  };

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={chartHandler} className={`${chart ? "in-cart" : ""}`}>
        {`${chart ? "Remove From Cart" : "Add to Cart"}`}
      </button>
    </li>
  );
}

export default Item;