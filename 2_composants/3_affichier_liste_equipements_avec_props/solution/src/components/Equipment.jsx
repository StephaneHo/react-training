const EQUIPMENTS = [
  { name: "nacelle articulee", price: 20000 },
  { name: "nacelle sur vehicule leger", price: 25000 },
  { name: "gant bionique", price: 1000 },
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export const Equipment = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.color}</p>
    </div>
  );
};

export const Equipment2 = ({ name, price }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};
