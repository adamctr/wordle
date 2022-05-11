import { verifLetter } from "../verifiers/verifLetter";

export const handlePressLetter = (prevWord, key, compareWord) => {
  if (verifLetter(key.keyCode)) {
    const newWord = `${prevWord}${key}`;
    const isWordLengthOk = newWord.length <= compareWord.length;
    if (isWordLengthOk) {
      return newWord;
    }
  } else {
    return prevWord;
  }
};
