import { useState, FC } from "react";

interface ImageGalleryItemProps {
  webformatURL: string;
  tags: string;
  largeImageURL: string;
  onSelect: (url: string) => void;
}

const ImageGalleryItem: FC<ImageGalleryItemProps> = ({
  webformatURL,
  tags,
  largeImageURL,
}) => {
  const [showLargeImage, setShowLargeImage] = useState(false);

  const handleImgClick = () => {
    setShowLargeImage(true);
  };

  const handleModalClose = () => {
    setShowLargeImage(false);
  };

  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} onClick={handleImgClick} />
      {showLargeImage && (
        <div className="Overlay" onClick={handleModalClose}>
          <div className="Modal">
            <img src={largeImageURL} alt={tags} />
          </div>
        </div>
      )}
    </li>
  );
};

export default ImageGalleryItem;
