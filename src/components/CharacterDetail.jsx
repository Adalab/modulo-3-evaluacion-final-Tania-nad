function CharacterDetail({ character }) {
  console.log(character);
  return (
    <section>
      <img src={character.photo} alt="" />
      <h4>{character.name}</h4>
      <p>{character.planet}</p>
      <p>{character.specie}</p>
      <p>{character.planet}</p>
      <p>{character.episodes}</p>
      <p>{character.status}</p>
    </section>
  );
}

export default CharacterDetail;
