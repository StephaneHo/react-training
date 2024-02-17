import nacelleImg from "./assets/nacelleImg.jpg";
import camionbenneImg from "./assets/camionbenneImg.jpg";
import betionniereImg from "./assets/betionniereImg.jpg";
import "./App.css";
import { Equipment } from "./components/Equipment";
import { ButtonMenu } from "./components/ButtonMenu";

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

function App() {
  return (
    <div>
      <div>
        <ButtonMenu>Creer</ButtonMenu>
        <ButtonMenu>Editer</ButtonMenu>
        <ButtonMenu>Supprimer</ButtonMenu>
      </div>
      {equipments.map(({ name, image }) => (
        <Equipment name={name} image={image} key={name} />
      ))}
    </div>
  );
}

export default App;
