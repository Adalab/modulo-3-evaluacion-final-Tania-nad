import { Link } from "react-router-dom";
import "../scss/layout/CharacterCard.scss";

function CharacterCard({ characterData }) {
  return (
    <li>
      <Link to={`/character/${characterData.id}`}>
        <div className="background">
          <img src={characterData.photo} alt={characterData.name} />
          <h4>{characterData.name}</h4>
          <p>{characterData.specie}</p>
        </div>
      </Link>
    </li>
  );
}

export default CharacterCard;
