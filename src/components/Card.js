import React, { useState } from "react";
import { Collapse } from "@mui/material";

const Card = ({
  number,
  answer,
  prompt,
  proficiency,
  guessedRight,
  guessedWrong,
  guessing,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  console.log(showAnswer);
  return (
    <div className="card">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>Q {number}</p>
        <p>
          proficiency: {proficiency} ({guessedRight}/{guessedWrong})
        </p>
      </div>
      <p>prompt: {prompt}</p>
      <p onClick={() => setShowAnswer((prev) => !prev)}>
        {showAnswer ? "hide answer" : "show answer"}
      </p>

      <Collapse in={showAnswer}>
        <div style={{ width: "100%", display: "flex", flexFlow: "column" }}>
          <p>answer: {answer}</p>
          {guessing && (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>Wrong</p>
              <p>Right</p>
            </div>
          )}
        </div>
      </Collapse>
    </div>
  );
};

export { Card };
