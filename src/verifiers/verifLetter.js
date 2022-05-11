export const verifLetter = (keyCode) => {
  // Verifie si c'est une Lettre de l'alphabet.
  if (
    (keyCode > 64 && keyCode < 91) ||
    (keyCode > 96 && keyCode < 123) ||
    keyCode === 8
  ) {
    return true;
  } else return false;
};
