import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import { useEffect } from "react";
import { useState } from "react";
import getCharactersFromApi from "../services/GetCharactersFromApi";

function App() {
  //variables de estado
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharactersFromApi().then((charactersData) => {
      setCharacters(charactersData);
      console.log(charactersData);
    });
  });

  return (
    <>
      <header>Rick and Morty</header>
      <main>
        <Filter />
        <CharacterList characters={characters} />
      </main>
    </>
  );
}

export default App;
