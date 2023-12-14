import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import "./css/Header.css";

interface Params {
  link: string;
  label: string;
}

const Header = ({ link, label }: Params) => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <img src={logo} alt="Midwestern Logo" />
      <Link to={link}>{label}</Link>
    </header>
  );
};

export default Header;
