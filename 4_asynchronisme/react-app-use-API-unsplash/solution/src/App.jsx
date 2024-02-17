import { useState } from "react";
import { searchImages } from "./api";
import { SearchBar } from "./components/SearchBar";
import { ImageList } from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (keyword) => {
    const result = await searchImages(keyword);
    console.log(result);
    setImages(result);
  };
  return (
    <div className="mx-10 my-10">
      <h1 className="italic">Liste d images</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
