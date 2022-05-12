import { verifLetter } from "../verifiers/verifLetter";

export const handlePressLetter = (prevWord, key, compareWord) => {
  const newWord = `${prevWord}${key}`;
  const isWordLengthOk = newWord.length <= compareWord.length;
  if (isWordLengthOk && verifLetter(key)) {
    return newWord;
  } else {
    return prevWord;
  }
};
