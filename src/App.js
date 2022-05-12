import { styled } from "@stitches/react";
import Grids from "./components/Grids";
import { useReducer } from "react";
import WordleContext, { initialState } from "./context/wordleContest";
import { useEffect } from "react";
import { wordReducer } from "./handlers/wordReducer";
import Alertbox from "./components/Alertbox";

const Container = styled("div", {
  position: "relative",
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "grey",
  gap: "1 0px",
});

function App() {
  const [word, setWord] = useReducer(wordReducer, "");

  useEffect(() => {
    const handleKeydown = (e) => {
      setWord(e.key);
    };
    console.log(word);
    document.addEventListener("keydown", handleKeydown);

    return () => document.removeEventListener("keydown", handleKeydown);
  }, [word]);

  return (
    <WordleContext.Provider value={{ ...initialState, word }}>
      <Container>
        <Grids />
        <Alertbox />
      </Container>
    </WordleContext.Provider>
  );
}

export default App;
