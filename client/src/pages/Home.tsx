import { useState, useEffect } from "react";
import imgRabbit from "../assets/Rabbit.png";
import imgShield from "../assets/Shield.png";
import imgTalkie from "../assets/Talkie.png";
import Card from "../components/Card";
import Header from "../components/Header";
import "./css/Home.css";
import { IContentService } from "../services/content.service";
import { IHomeContent } from "../models/home-content.model";

interface Props {
  contentService: IContentService;
}

const Home = ({ contentService }: Props) => {
  const [challengeArray, setChallengeArray] = useState(new Array<string>());
  const [cards, setCards] = useState(new Array<IHomeContent>());

  useEffect(() => {
    contentService
      .getHomeCardContent()
      .then((cardContent) => setCards([...cardContent]));
  }, []);

  const cardImages = [
    { src: imgTalkie, alt: "talkie" },
    { src: imgRabbit, alt: "rabbit" },
    { src: imgShield, alt: "shield" }
  ];

  const handleChallengeLinkClick = () => {
    if (!!challengeArray.length)
      return alert("Silly, you already done did made the array.");

    let array1: string[] = [
      "Matt Johnson",
      "Matt Johnson",
      "Bart Paden",
      "Ryan Doss",
      "Jared Malcolm"
    ];
    let array2: string[] = [
      "Matt Johnson",
      "Bart Paden",
      "Bart Paden",
      "Jordan Heigle",
      "Jordan Heigle",
      "Tyler Viles"
    ];
    setChallengeArray(Array.from(new Set([...array1, ...array2])));
  };

  return (
    <div className="home">
      <Header link="/contact" label="contact"></Header>
      <section>
        <div className="row">
          {cards.map((card) => (
            <div key={card.id} className="col-12 col-md-4">
              <Card
                image={cardImages[card.id - 1]}
                title={card.title}
                content={card.content}
                button={{
                  label: "Learn More",
                  onClick() {
                    console.log(`card ${card.id} clicked`);
                  }
                }}></Card>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1>
          <span className="accent">Heading</span> One
        </h1>
        <p>
          Remove the duplicates in 2 Javascript arrays (found in readme), add
          the results to an array and output the list of distinct names in an
          unordered list below this paragraph when{" "}
          <a className="challenge-link" onClick={handleChallengeLinkClick}>
            this link
          </a>{" "}
          is clicked. If the operation has been completed already, notify the
          user that this has already been done.
        </p>
        {!!challengeArray.length && (
          <ul>
            {challengeArray.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Home;
