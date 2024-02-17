export const Equipment = ({ name, image }) => {
  return (
    <div>
      <p>name: {name}</p>
      <img src={image} />
    </div>
  );
};
