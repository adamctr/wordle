import React from "react";
import { styled } from "@stitches/react";

const StyledLetter = styled("div", {
  fontWeight: "bold",
  fontFamily: "arial",
  fontSize: "32px",
  textTransform: "uppercase",
});

const Letter = ({ letter }) => {
  return <StyledLetter>{letter}</StyledLetter>;
};

export default Letter;
