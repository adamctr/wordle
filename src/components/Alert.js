import React from "react";
import { styled } from "@stitches/react";
import { fade } from "../style/animations";

const StyledALert = styled("div", {
  background: "black",
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  padding: "12px 22px",
  borderRadius: "5px",
  animation: `${fade} 0.15s forwards`,
  animationDelay: `0.75s`,
});

const Alert = () => {
  return <StyledALert>test</StyledALert>;
};

export default Alert;
