import nacelleImg from "./assets/nacelleImg.jpg";
import camionbenneImg from "./assets/camionbenneImg.jpg";
import betionniereImg from "./assets/betionniereImg.jpg";
import "./App.css";

const equipments = [
  {
    name: "nacelle",
    image: nacelleImg,
  },
  {
    name: "camion benne",
    image: camionbenneImg,
  },
  {
    name: "betionniere",
    image: betionniereImg,
  },
];

const Equipment = (props) => {
  return (
    <div>
      <p>name: {props.name}</p>
      <img src={props.image} />
    </div>
  );
};

function App() {
  return (
    <div>
      <Equipment {...equipments[0]} />
      <Equipment {...equipments[1]} />
      <Equipment {...equipments[2]} />
    </div>
  );
}

export default App;
