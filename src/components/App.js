import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [mode, setMode] = useState(false);

  const modeHandler = () => {
    setMode(!mode);
    console.log(mode);
  };

  return (
    <div className={`App ${mode ? "dark" : "light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={modeHandler}>{`${
          mode ? "Dark Mode" : "Light Mode"
        }`}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;