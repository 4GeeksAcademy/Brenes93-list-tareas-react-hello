import React, { useState } from "react";

//crea tu primer componente
const Home = () => {
  const [tareas, setTareas] = useState([]);
  const [valorInput, setValorInput] = useState("");

  const agregarTarea = (e) => {
    if (e.key === "Enter" && valorInput.trim() !== "") {
      setTareas([...tareas, valorInput]);
      setValorInput("");
    }
  };

  const eliminarTarea = (indice) => {
    const tareasActualizadas = tareas.filter((_, i) => i !== indice);
    setTareas(tareasActualizadas);
	
  };

  return (
    <div className="text-center">
      <h2>Tareas</h2>
      <input
        type="text"
        className="entrada-tarea"
        placeholder="¿Qué necesitas hacer?"
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
        onKeyDown={agregarTarea}
      />
	  
       <ul className="lista-tareas">
        {tareas.length === 0 ? (
          <li className="sin-tareas">No hay tareas, añade una</li>
        ) : (
          tareas.map((tarea, indice) => (
            <li key={indice}>
              {tarea}
              <button
                className="boton-eliminar"
                onClick={() => eliminarTarea(indice)}
              >
                x
              </button>
            </li>
          ))
        )}
      </ul>
      <div className="contador-tareas">
        {tareas.length} tarea{tareas.length !== 1 ? "s" : ""} restante{tareas.length !== 1 ? "s" : ""}
      </div>
	  
    </div>
  );
};

export default Home;