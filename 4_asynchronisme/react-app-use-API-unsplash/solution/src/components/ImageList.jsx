import { ImageContainer } from "./ImageContainer";

export const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageContainer image={image} key={image.id} />;
  });
  return <div className="my-5">{renderedImages}</div>;
};
