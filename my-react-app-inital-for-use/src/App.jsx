import { useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { produce } from "immer";

const initialState = { count: 0, step: 0 };
const reducer = (state, action) => {
  console.log({ action });
  if (action.type === "increment") {
    state.count = state.count + 1;
  }
  if (action.type === "decrement") {
    state.count = state.count - 1;
  }
  if (action.type === "change") {
    state.step = action.payload;
  }
  if (action.type === "add") {
    state.count = state.count + action.payload;
    state.step = "";
  }

  return state;
};

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), initialState);
  console.log({ state });
  // const handleCount = () => {
  //   setCount((count) => count + 1)
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "add", payload: state.step });
  };

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
        count is {state.count}
        {/* <button onClick={}> */}
        <button onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={state.step}
            onChange={(event) =>
              dispatch({
                type: "change",
                payload: parseInt(event.target.value),
              })
            }
          />
        </form>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
