export const verifLetter = (key) => {
  // Verifie si c'est une Lettre de l'alphabet. ou Backspace / Enter
  const alphabet = [
    "Backspace",
    "Enter",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const alphabetUppercase = Array.from(
    alphabet.map((lettre) => {
      return lettre.toUpperCase();
    })
  );

  if (alphabetUppercase.includes(key.toUpperCase())) {
    return true;
  } else return false;
};
