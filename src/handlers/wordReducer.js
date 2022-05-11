import { initialState } from "../context/wordleContest";
import handlePressBackspace from "./handlePressBackspace";
import { handlePressEnter } from "./handlePressEnter";
import { handlePressLetter } from "./handlePressLetter";

export const wordReducer = (state, action) => {
  switch (action) {
    case "Backspace":
      return handlePressBackspace(state);
    case "Enter":
      return handlePressEnter(state, initialState.secretWord);
    default:
      return handlePressLetter(state, action, initialState.secretWord);
  }
};
