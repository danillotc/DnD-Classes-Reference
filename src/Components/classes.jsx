import React, { useState, useEffect } from 'react';
import './classes.css'

export default () => {
    
    let [classes, setClasses] = useState([]);

    // URL BASE
    const url = "https://www.dnd5eapi.co/api/classes/";

    // REQUISIÇÃO DE TODAS CLASSES DISPONÍVEIS
    useEffect(() => {        
        fetch(url)
            .then(response => {
                if(!response.ok) throw new Error("Requisition error. Status: "+response.status);
                return response.json();
            })
            // PROCESSAMENTO DO PAYLOAD
            .then(json => {
                const apiclasses = json.results.map(obj=>obj.name);
                setClasses(apiclasses);
            })
            // TRATANDO ERROS
            .catch(error => console.log(error))
        },[])        

    return (
        <div className="classesList">
            {classes.map(element => (
                <div className="classesListItem">
                    <input type="radio" name="classes" id={element} value={element}/>
                    <label htmlFor={element}>{element}</label>
                    <br/>
                </div>
            ))}
        </div>
    )
}