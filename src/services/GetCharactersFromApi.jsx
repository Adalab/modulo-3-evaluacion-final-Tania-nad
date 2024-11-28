//Creamos una función para encapsular el código del fetch y llamarlo desde App

const getCharactersFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
      //creo un nuevo array de datos
      const parsedCharacters = data.results.map((character) => {
        return {
          photo: character.image,
          name: character.name,
          specie: character.species,
          planet: character.origin.name,
          status: character.status,
        };
      });
      return parsedCharacters;
    });
};
export default getCharactersFromApi;
