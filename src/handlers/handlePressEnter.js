export const handlePressEnter = (word, compareWord) => {
  if (word.length < compareWord.length) {
    console.log("mot trop court");
    return word;
  }
  if (word !== compareWord) {
    console.log("non");
    return word;
  }
  console.log("bravo");
  return word;
};
