import "../scss/layout/Filter.scss";
function Filter({ onChangeName }) {
  const handleChangeName = (event) => {
    onChangeName(event.target.value);
  };
  return (
    <div className="filter">
      <form>
        <label htmlFor="name">Nombre del personaje</label>
        <input type="text" id="name" onChange={handleChangeName} />
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
