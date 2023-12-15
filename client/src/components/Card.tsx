import Button from "./Button";
import "./css/Card.css";

interface Props {
  image?: {
    src: string;
    alt: string;
  };
  title: string;
  content: string;
  button: {
    label: string;
    onClick: () => void;
  };
}

const Card = ({ image, title, content, button }: Props) => {
  return (
    <div className="card d-flex flex-column">
      <div className="row image">
        <div className="col-12 d-flex justify-content-center align-items-center">
          {!!image && <img src={image.src} alt={image.alt} />}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>{content}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <Button onClick={button.onClick} label={button.label}></Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
