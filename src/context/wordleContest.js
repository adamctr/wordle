import React from "react";

export const initialState = {
  word: "",
  secretWord: "porte",
};

const WordleContext = React.createContext(initialState);

export default WordleContext;
