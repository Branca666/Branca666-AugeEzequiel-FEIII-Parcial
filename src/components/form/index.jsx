import React from 'react'
import { useState } from 'react'


function Form({onSubmit, titulo}) {

    const[nombre, setNombre] = useState ("");
    const[animal, setAnimal] = useState ("");
    
    const handlerChangeNombre = (e) => {
        setNombre(e.target.value);
    }

    const handlerChangeAnimal = (e) => {
        setAnimal(e.target.value);
    }

 

    const handlerSubmit = (e) => {
        e.preventDefault();

        const data = {
            nombre,
            animal
        }
        onSubmit(data)
    }

    return (
        <form onSubmit={handlerSubmit}>{}
            <h1>{titulo}</h1> {}
            <input 
                id="name"
                type="text" 
                name="nombre"
                value={nombre}
                placeholder="Nombre (mayor a 3 caracteres)"
                onChange={handlerChangeNombre}
            />
            <br />

            <input
                id="animal"
                type="text" 
                name="animal" 
                value={animal}
                placeholder="Animal favorito (mayor a 6 caracteres)"
                onChange={handlerChangeAnimal}
            />
            <br />
            <input id="btn-enviar" type="submit" />

            
        </form>
    )
}

export default Form