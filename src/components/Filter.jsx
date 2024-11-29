import "../scss/layout/Filter.scss";
function Filter({ onChangeName }) {
  const handleChangeName = (event) => {
    event.preventDefault();
    onChangeName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="filter">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          onChange={handleChangeName}
          className="filterInput"
        />
      </form>
    </div>
  );
}

export default Filter;

/*
    Filtrar por nombre
      Cuando la usuaria escriba en la casilla de búsqueda:
	      Recoger el valor del input
		      Si el nombre incluye lo escrito por la usuaria
		      Filtrar la lista de personajes
		      Mostrar la lista filtrada en la página web
  */
