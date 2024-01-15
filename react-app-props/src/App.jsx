import nacelleImg from "./assets/nacelleImg.jpg";
import camionbenneImg from "./assets/camionbenneImg.jpg";
import betionniereImg from "./assets/betionniereImg.jpg";
import "./App.css";

const EquipmentNacelle = () => {
  return (
    <div>
      <p>name: Nacelle</p>
      <img src={nacelleImg} />
    </div>
  );
};

const EquipmentCamionbenne = () => {
  return (
    <div>
      <p>name: Camion benne</p>
      <img src={camionbenneImg} />
    </div>
  );
};

const EquipmentBetonniere = () => {
  return (
    <div>
      <p>name: Betonniere</p>
      <img src={betionniereImg} />
    </div>
  );
};

function App() {
  return (
    <div>
      <EquipmentNacelle />
      <EquipmentCamionbenne />
      <EquipmentBetonniere />
    </div>
  );
}

export default App;
