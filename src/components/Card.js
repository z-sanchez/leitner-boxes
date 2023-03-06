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
  const [boxNumInput, setBoxNumInput] = useState("");
  return (
    <>
      <div
        style={{
          width: "80%",
          margin: "25px auto",
          height: "2px",
          backgroundColor: "#575B60",
        }}
      ></div>
      <div className="card">
        <div className="card-label">
          <p>Card {number}</p>
          <p className="card-label-stats">
            P:{proficiency} R:{guessedRight} W:{guessedWrong}
          </p>
        </div>
        <div className="card-question-answer-container">
          <p>prompt: {prompt}</p>
          <div className="card-answer-container">
            <p>answer: </p>
            <p onClick={() => setShowAnswer((prev) => !prev)}>
              {showAnswer ? "hide" : "show answer"}
            </p>
          </div>
          <Collapse in={showAnswer}>
            <p className="box-answer">{answer}</p>
            <div className="card-input-container">
              {guessing ? (
                <>
                  <p className="box-button">Correct</p>
                  <p className="box-button">Incorrect</p>
                </>
              ) : (
                <div className="box-num-input">
                  <p>Box</p>
                  <input
                    type="number"
                    placeholder="box number"
                    value={boxNumInput}
                    min="0"
                    max="9"
                    onChange={(e) => setBoxNumInput(e.target.value)}
                  ></input>
                </div>
              )}
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
};

export { Card };
