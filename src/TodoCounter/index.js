import React from 'react';
import './TodoCounter.css';
import {TodoContext} from '../TodoContext';

function TodoCounter(){
    const {
        completedTodos,
        totalTodos, 
        todoFinalizado
    } = React.useContext(TodoContext);

    return (
        todoFinalizado === true ? 
            <div className='Container-TodoCounter Container--finalizado'>
                <p className='TodoCounter--finalizado'>¡Felicidades! has completado tus <span>{totalTodos}</span> TODOs
                </p>
            </div> : 
            <div className="Container-TodoCounter Container--enProgreso">
                <p className='TodoCounter'>
                    Has completado <span>{completedTodos}</span> 
                    de <span>{totalTodos}</span> TODOs
                </p>
            </div>
    );
}

export {TodoCounter};