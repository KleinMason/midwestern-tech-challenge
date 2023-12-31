import { useNavigate } from "react-router-dom";
import imgQuestionMark from "../assets/QuestionMark.png";
import Card from "../components/Card";
import Header from "../components/Header";

const NotFound = () => {
  const navigate = useNavigate();

  const handleHomeButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <Header link={"/"} label={"home"}></Header>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Card
            image={{
              src: imgQuestionMark,
              alt: "Question Mark"
            }}
            title={"Hmmm..."}
            content={
              "We where not able to find the page you're looking for. Please click the button below to return to the home page."
            }
            button={{
              label: "Home",
              onClick: handleHomeButtonClick
            }}></Card>
        </div>
      </div>
    </>
  );
};

export default NotFound;
