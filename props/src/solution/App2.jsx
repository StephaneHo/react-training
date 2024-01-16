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
      <Equipment name={equipments[0].name} image={equipments[0].image} />
      <Equipment name={equipments[1].name} image={equipments[1].image} />
      <Equipment name={equipments[2].name} image={equipments[2].image} />
    </div>
  );
}

export default App;
