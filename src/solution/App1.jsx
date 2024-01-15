import nacelleImg from "./assets/nacelleImg.jpg";
import camionbenneImg from "./assets/camionbenneImg.jpg";
import betionniereImg from "./assets/betionniereImg.jpg";
import "./App.css";

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
      <Equipment name="nacelle" image={nacelleImg} />
      <Equipment name="camion benne" image={camionbenneImg} />
      <Equipment name="betionniere" image={betionniereImg} />
    </div>
  );
}

export default App;
