import "../scss/layout/CharacterDetail.scss";
function CharacterDetail({ character }) {
  console.log(character);
  return (
    <section className="section">
      <img src={character.photo} alt="" />
      <h3>{character.name}</h3>
      <p>Status:{character.status}</p>
      <p>Species:{character.specie}</p>
      <p>Origin:{character.planet}</p>
      <p>Episodes:{character.episodes}</p>
    </section>
  );
}

export default CharacterDetail;
