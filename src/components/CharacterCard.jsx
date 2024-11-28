import { Link } from "react-router-dom";

function CharacterCard({ characterData }) {
  return (
    <li>
      <Link to={`/character/${characterData.id}`}>
        <img src={characterData.photo} alt={characterData.name} />
        <h4>{characterData.name}</h4>
        <p>{characterData.specie}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;
