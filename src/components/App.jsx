import "../scss/App.scss";
import "../scss/layout/App.scss";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterDetail from "./CharacterDetail";
import Image from "../images/Rick_and_Morty_logo.webp";
import { useEffect } from "react";
import { useState } from "react";
import getCharactersFromApi from "../services/GetCharactersFromApi";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";

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
  }, []);
  //lifting de la hija Filter a App
  const handleFilterName = (value) => {
    setFilterName(value);
  };
  //Filtrar la lista de personajes por nombre
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  /*Ruta dinámica del detalle del personaje
    - Saber si la usuaria está en la ruta detalle
    - Obtener el id del personaje
    - Buscar en la lista de personajes, el personaje con ese id
    - Pasar la información del personaje a UserDetail para pintarlo
  */
  const { pathname } = useLocation();
  const routeData = matchPath("/character/:idCharacter", pathname);
  const urlId = routeData !== null ? routeData.params.idCharacter : null;

  const character = characters.find((character) => {
    return character.id === parseInt(urlId);
  });

  return (
    <>
      <header className="header">
        <img src={Image} alt="" className="header" />
      </header>
      <main>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Filter onChangeName={handleFilterName} />
                  <CharacterList characters={filteredCharacters} />
                </>
              }
            />
            <Route
              path="/character/:idCharacter"
              element={<CharacterDetail character={character} />}
            />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
