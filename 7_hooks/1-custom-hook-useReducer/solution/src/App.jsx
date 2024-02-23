import { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "CHANGE_VALUE_TO_ADD":
      return { ...state, valueToAdd: action.payload };
    case "VALUE_TO_ADD":
      return { ...state, count: state.count + action.payload, valueToAdd: 0 };
    default:
      throw new Error("unexpected action type:" + action.type);
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const handleChange = (event) => {
    // if there is not a number then it is falsy and it gets defaulted to zero
    const value = parseInt(event.target.value) || 0;
    dispatch({ type: "CHANGE_VALUE_TO_ADD", payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "VALUE_TO_ADD", payload: state.valueToAdd });
  };

  return (
    <>
      <div className="card">
        <button
          className="flex items-center px-3 py-1.5 border border-blue-500 bg-blue-500 text-white"
          onClick={increment}
        >
          Incrementer
        </button>
        <button onClick={decrement}>Decrementer</button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Ajouter une grande quantite</label>
        <input
          type="number"
          value={state.valueToAdd || ""}
          onChange={handleChange}
        />
        <button>Ajouter</button>
      </form>
      <p>Valeur courante</p>
      <p className="count">{state.count}</p>
    </>
  );
}

export default App;
