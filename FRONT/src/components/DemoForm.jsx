import React, { useState } from 'react';

function DinamicInputs(){
    const modeloFamiliar = {nombre: "" };
    const [familiar, setFamiliar] = useState([{...modeloFamiliar }]);

    const [persona, setPersona] = useState({
        nombre: "",
    });
    
    const [errors, setErrors] = useState({});

    const agregaFamiliar = () => {
        setFamiliar([...familiar, { ...modeloFamiliar }]);
    };

    const handlePersonaChange = (e) => {
        console.log({ ...persona, [e.target.name]: e.target.value });
 
        if (e.target.value.length < 3) {
            if(
                e.target.name === "mail" &&
                !/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(e.target.value)
            ) {
                setErrors({ ...errors, [e.target.name]: "debe ser mail" });
            }
            setErrors({ [e.target.name]: "Debe contener mas de 3 letras"});

            setPersona({
                ...persona,

                [e.target.name]: e.target.value,
            
            
            });
        } else {
            setPersona({
                ...persona,

                [e.target.name]: e.target.value,



            });
            setErrors({});
        }
    };

    const handleFamiliarChange = (e) => {
        const familiares = [...familiar];
        console.log(familiares[e.target.id][e.target.dataset.name]);
        familiares[e.target.id][e.target.dataset.name] = e.target.value;
        setFamiliar(familiares);
};

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(familiar)
    }
    
return (
    <form onSubmit ={handleSubmit}>
        <laber htmlFor="nombre">Nombre:</laber>
        <input
            type="text"
            name="nombre"
            value={persona.nombre}
            onChange={handlePersonaChange}

        />
        {errors.nombre && <span>{errors.nombre}</span>}
        
        <laber htmlFor="nombre">Mail:</laber>
        <input
            type="button"
            value="Agrega un Familiar"
            onChange={agregaFamiliar}
            disabled={errors.nombre ? true : false}
        />
        {familiar.map((el, i) => (
            <div key={`persona-${i}`}>
            <label htmlFor={`nombre-${i}`}>{`Familiar #${i + 1}`}</label>
            <input
            type="text"
            name={`nombre-${i}`}
            id={i}
            data-name="nombre"
            value={el.nombre}
            onChange={handleFamiliarChange}
            />
            </div>
        ))}
        <input type="submit" value="Submit" />
    </form>
    );
}

export default DinamicInputs; 