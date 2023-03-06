import React from "react";
import { Box } from "./Box";

const boxZeroCards = [
  {
    prompt: "This is a prompt",
    answer: "This is an answer",
    number: 1,
    currentBox: "Current Deck",
    proficiency: 3,
    guessedRight: 6,
    guessedWrong: 2,
  },
  {
    prompt: "This is a prompt",
    answer: "This is an answer",
    number: 2,
    currentBox: 0,
    proficiency: 8,
    guessedRight: 9,
    guessedWrong: 3,
  },
];

const Boxes = () => {
  const currentBox = [boxZeroCards[0]];
  const otherBox = [boxZeroCards[1]];

  return (
    <div className="box-container">
      <p className="box-section-label">Next Session</p>
      <Box cards={currentBox} guessing={true} boxLabel={"Current Deck"}></Box>

      <div
        style={{
          width: "80%",
          margin: "25px 0",
          height: "2px",
          backgroundColor: "#575B60",
        }}
      ></div>
      <p className="box-section-label">Next Session</p>
      <Box cards={otherBox} guessing={false} boxLabel={"Box 0"}></Box>
      <Box cards={otherBox} guessing={false} boxLabel={"Box 0"}></Box>
    </div>
  );
};

export { Boxes };
