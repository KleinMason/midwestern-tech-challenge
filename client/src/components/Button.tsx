import { MouseEventHandler } from "react";
import "./css/Button.css";

interface Props {
  disabled?: boolean;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ disabled = false, label, onClick }: Props) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
