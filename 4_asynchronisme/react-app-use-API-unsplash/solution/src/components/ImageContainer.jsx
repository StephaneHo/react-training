export const ImageContainer = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} className="object-scale-down h-48 w-48" />
    </div>
  );
};
