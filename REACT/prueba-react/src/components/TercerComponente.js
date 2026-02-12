import React, {useState} from 'react';

export const TercerComponente = () => {
//   let nombre = "Paco";
  let web = "paco.com"
  const [nombre, setNombre] = useState("Paco");
  let paises = [
    "España",
    "Portugal",
    "Italia",
    "Francia"
  ]
  
  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  }
    return (

    <div>
        <h3>Este es mi tercer componente</h3>
        <p>Mi nombre es: <strong className={ nombre.length>=5 ? 'rojo':'verde'}>{nombre}</strong></p>
        <p>Mi web es: {web}</p>
        <input type="text" onChange={e=>cambiarNombre(e.target.value)}/>
        <button onClick={ e => cambiarNombre("Manolo")}>Cambiar Nombre</button>
        <ul>
            {
              paises.map( (pais, indice) => {
                return (<li key={indice}>
                    {pais}
                </li>)
              })  
            }
        </ul>
    </div>
  )
}
