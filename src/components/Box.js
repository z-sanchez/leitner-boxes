import { Collapse } from "@mui/material";
import React, { useState } from "react";
import { Card } from "./Card";

const Box = ({ number, cards, guessing }) => {
  const [showCards, setShowCards] = useState(false);
  return (
    <>
      <div className="box">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>Box {number}</p>
          <p>Cards: {cards.length}</p>
        </div>
        <p onClick={() => setShowCards((prev) => !prev)}>
          {showCards ? "hide" : "show"}
        </p>
      </div>
      <Collapse in={showCards}>
        {cards.map((card) => {
          return <Card key={card.number} guessing={guessing} {...card}></Card>;
        })}
      </Collapse>
    </>
  );
};

export { Box };
