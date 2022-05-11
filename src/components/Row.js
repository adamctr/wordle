import React from "react";
import { styled } from "@stitches/react";
import Square from "./Square";
import WordleContext from "../context/wordleContest";
import { useContext } from "react";

const StyledRow = styled("div", {
  height: "100%",
  display: "flex",
  gap: "10px",
});

const Row = (props) => {
  const { word, secretWord } = useContext(WordleContext);
  const getLetter = (index) => {
    if (props.isActive) {
      return word[index];
    }
  };
  return (
    <StyledRow>
      {Array.from(Array(secretWord.length).keys()).map((letterPosition) => {
        return (
          <Square
            key={letterPosition}
            letter={getLetter(letterPosition)}
          ></Square>
        );
      })}
    </StyledRow>
  );
};

export default Row;
