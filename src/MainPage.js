import React, { useState } from "react";
import { BOXES_PAGE_ID, CARDS_PAGE_ID } from "./constants";
import { Boxes } from "./components/Boxes";
import { Cards } from "./components/Cards";

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(BOXES_PAGE_ID);

  return (
    <div id="container">
      <div id="page">
        <div id="nav">
          <p id="logo">Leitner Boxes</p>
          <div id="nav-buttons">
            <p
              className={currentPage === BOXES_PAGE_ID ? "active" : ""}
              onClick={() => setCurrentPage(BOXES_PAGE_ID)}
            >
              Boxes
            </p>
            <p
              className={currentPage === CARDS_PAGE_ID ? "active" : ""}
              onClick={() => setCurrentPage(CARDS_PAGE_ID)}
            >
              Cards
            </p>
          </div>
        </div>

        <div id="content">
          {currentPage === BOXES_PAGE_ID && <Boxes></Boxes>}
          {currentPage === CARDS_PAGE_ID && <Cards></Cards>}
        </div>
      </div>
    </div>
  );
};

export { MainPage };
