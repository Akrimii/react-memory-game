import MemoryCard from "./components/MemoryCard";
import Header from "./components/Header";
import { allCharacters } from "./components/allCharacters";
import { useState } from "react";
import shuffleCard from "./components/shuffleCard";

function Apps() {
  const [pictures, setPictures] = useState(allCharacters);
  const [clickedPictures, setClickPictures] = useState([]);
  const [score, setScore] = useState(0);
  const [allScores, setAllScores] = useState([0]);

  return (
    <>
      <Header score={score} allScores={allScores} />
      <MemoryCard
        pictures={pictures}
        handleClick={(name) => {
          if (!clickedPictures.includes(name)) {
            setClickPictures([...clickedPictures, name]);
            setPictures(shuffleCard(pictures));
            setScore(score + 1);
          } else {
            setClickPictures([]);
            setPictures(allCharacters);
            setAllScores([...allScores, score]);
            setScore(0);
          }
        }}
      />
    </>
  );
}

export default Apps;
