import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import { useEffect } from "react";
import { useState } from "react";
import getCharactersFromApi from "../services/GetCharactersFromApi";

function App() {
  //variables de estado
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  /* 
  Pintar la lista de personajes
   Hacer una petición al servidor 
	  Obtener la respuesta del servidor
	  Pintar la lista en el html
*/
  useEffect(() => {
    getCharactersFromApi().then((charactersData) => {
      setCharacters(charactersData);
    });
  });
  //lifting de la hija Filter a App
  const handleFilterName = (value) => {
    setFilterName(value);
  };
  //Filtrar la lista de personajes por nombre
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <>
      <header>Rick and Morty</header>
      <main>
        <Filter onChangeName={handleFilterName} />
        <CharacterList characters={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
