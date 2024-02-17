import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createRandomSalesCategory } from "./helper/index";
import { SalesCategory } from "./components/SalesCategory";

function App() {
  const [categories, setCategories] = useState([]);

  const handleClick = () => {
    const newCat = createRandomSalesCategory();
    setCategories([...categories, newCat]);
  };

  const reset = () => {
    setCategories([]);
  };
  console.log(categories);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>Ajouter une categorie</button>
        <button onClick={reset}>reset</button>

        {categories.map((category, index) => (
          <SalesCategory category={category} key={index} />
        ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
