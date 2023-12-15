import { useEffect, useState } from "react";
import imgRabbit from "../assets/Rabbit.png";
import imgShield from "../assets/Shield.png";
import imgTalkie from "../assets/Talkie.png";
import Card from "../components/Card";
import Header from "../components/Header";
import { IPageContent } from "../models/page-content.model";
import { IContentService } from "../services/content.service";
import "./css/Home.css";

interface Props {
  contentService: IContentService;
}

const Home = ({ contentService }: Props) => {
  const [challengeArray, setChallengeArray] = useState(new Array<string>());
  const [homeContent, setHomeContent] = useState(new Array<IPageContent>());

  useEffect(() => {
    contentService
      .getHomePageContent()
      .then((homeContent) => setHomeContent([...homeContent]))
      .catch((error) => console.log(error));
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
          {homeContent.map((c) => (
            <div key={c.id} className="col-12 col-md-4">
              <Card
                image={cardImages[c.id - 1]}
                title={c.title}
                content={c.content}
                button={{
                  label: "Learn More",
                  onClick() {
                    console.log(`card ${c.id} clicked`);
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
