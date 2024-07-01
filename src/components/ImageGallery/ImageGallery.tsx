import { FC } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { ImageData } from "../../hooks/useImageLoader";

interface ImageGalleryProps {
  requestedImg: ImageData[];
  onSelect: (url: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ requestedImg, onSelect }) => {
  return (
    <ul className="ImageGallery">
      {requestedImg.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
