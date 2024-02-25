import "./App.css";
import { Equipment } from "./components/Equipment";

const EQUIPMENTS = [
  { name: "nacelle articulee", price: 20000 },
  { name: "nacelle sur vehicule leger", price: 25000 },
  { name: "gant bionique", price: 1000 },
];

function App() {
  return (
    <>
      <p>Je choisis ces equipements</p>
      {EQUIPMENTS.map(({ name, price }) => (
        <Equipment name={name} price={price} key={name} color="red" />
      ))}
    </>
  );
}

export default App;
