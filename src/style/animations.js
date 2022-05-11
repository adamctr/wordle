import { keyframes } from "@stitches/react";

const bounce = keyframes({
  "O%": { transform: "scale(1)" },
  "30%": { transform: "scale(1.075)" },
  "100%": { transform: "scale(1)" },
});

export default bounce;
