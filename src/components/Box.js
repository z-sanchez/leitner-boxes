import { Collapse } from "@mui/material";
import React, { useState } from "react";
import { Card } from "./Card";

const Box = ({ boxLabel, cards, guessing }) => {
  const [showCards, setShowCards] = useState(false);
  return (
    <div className="box">
      <p className="box-label">{boxLabel}</p>
      <p className="box-card-details">{cards.length} Cards</p>
      {!showCards && (
        <p className="box-button" onClick={() => setShowCards(true)}>
          {guessing ? "Start" : "Open"}
        </p>
      )}
      <Collapse in={showCards} style={{ width: "100%" }}>
        {cards.map((card) => {
          return <Card key={card.number} guessing={guessing} {...card}></Card>;
        })}
      </Collapse>
    </div>
  );
};

export { Box };
