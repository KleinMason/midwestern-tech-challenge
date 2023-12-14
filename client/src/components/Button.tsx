import { MouseEventHandler } from "react";
import "./css/Button.css";

interface Props {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ label, onClick }: Props) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
