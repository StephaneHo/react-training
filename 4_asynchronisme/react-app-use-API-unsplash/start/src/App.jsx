import { SearchBar } from "./components/SearchBar";

function App() {
  const handleSubmit = (keyword) => {
    console.log(keyword);
  };

  return (
    <>
      <h1>Liste d images</h1>
      <SearchBar onSubmit={handleSubmit} />
    </>
  );
}

export default App;
