import { FC, useEffect } from "react";
import "../../styles/styles.css";

interface ModalProps {
  onClose: () => void;
  selectedImg: string;
}

const Modal: FC<ModalProps> = ({ onClose, selectedImg }) => {
  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      console.log(`Key pressed: ${evt.key}`);
      if (evt.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">
        <img src={selectedImg} alt="Pixabay" />
      </div>
    </div>
  );
};

export default Modal;
