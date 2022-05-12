import React from "react";
import { styled } from "@stitches/react";
import Letter from "../Letter";
import { bounce } from "../style/animations";

const StyledSquare = styled("div", {
  height: "100%",
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  outline: "2px solid #d3d6da",
  transition: "0.24S outline",
  variants: {
    isActive: {
      true: {
        outline: "2px solid #878a8c",
        animation: `${bounce} 200ms ease`,
      },
    },
  },
});

const Square = ({ letter }) => {
  return (
    <StyledSquare isActive={!!letter}>
      <Letter letter={letter} />
    </StyledSquare>
  );
};

export default Square;
