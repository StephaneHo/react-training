export const SearchBar = ({ onSubmit }) => {
  const handleClick = () => {
    onSubmit("this is my click event");
  };

  return (
    <div>
      <input />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
