import { keyframes } from "@stitches/react";

export const bounce = keyframes({
  "O%": { transform: "scale(1)" },
  "30%": { transform: "scale(1.075)" },
  "100%": { transform: "scale(1)" },
});

export const fade = keyframes({
  "O%": { opacity: 1 },
  "100%": { opacity: 0 },
});
