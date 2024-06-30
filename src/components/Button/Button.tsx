import { FC } from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button type="button" className="Button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
