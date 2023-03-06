import React from "react";
import { Box } from "./Box";

const boxZeroCards = [
  {
    prompt: "This is a prompt",
    answer: "This is an answer",
    number: 1,
    proficiency: 3,
    guessedRight: 6,
    guessedWrong: 2,
  },
  {
    prompt: "This is a prompt",
    answer: "This is an answer",
    number: 2,
    proficiency: 8,
    guessedRight: 9,
    guessedWrong: 3,
  },
];

const Boxes = () => {
  const currentBox = [boxZeroCards[0]];
  const otherBox = [boxZeroCards[1]];

  return (
    <div style={{ width: "80%" }}>
      <Box number={0} guessing={true} cards={currentBox}></Box>
      <div
        style={{
          width: "100%",
          margin: "15px 0",
          height: "4px",
          backgroundColor: "black",
        }}
      ></div>
      <Box number={1} guessing={false} cards={otherBox}></Box>
      <Box number={2} guessing={false} cards={otherBox}></Box>
    </div>
  );
};

export { Boxes };
