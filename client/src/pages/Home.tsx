import { useState } from "react";
import imgRabbit from "../assets/Rabbit.png";
import imgShield from "../assets/Shield.png";
import imgTalkie from "../assets/Talkie.png";
import Card from "../components/Card";
import Header from "../components/Header";
import "./css/Home.css";

const Home = () => {
  const [challengeArray, setChallengeArray] = useState(new Array<string>());

  const cards = [
    {
      id: 0,
      image: { src: imgTalkie, alt: "talkie" },
      heading: "Heading Two",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      button: { label: "Learn More", onClick: () => console.log(1) }
    },
    {
      id: 1,
      image: { src: imgRabbit, alt: "rabbit" },
      heading: "Heading Two",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      button: { label: "Learn More", onClick: () => console.log(2) }
    },
    {
      id: 2,
      image: { src: imgShield, alt: "shield" },
      heading: "Heading Two",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      button: { label: "Learn More", onClick: () => console.log(3) }
    }
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
                image={card.image}
                heading={card.heading}
                description={card.description}
                button={card.button}></Card>
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
