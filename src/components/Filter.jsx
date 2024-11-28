function Filter({ onChangeName }) {
  const handleChangeName = (event) => {
    onChangeName(event.target.value);
  };
  return (
    <form>
      <label htmlFor="name">Nombre del personaje</label>
      <input type="text" id="name" onChange={handleChangeName} />
    </form>
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
