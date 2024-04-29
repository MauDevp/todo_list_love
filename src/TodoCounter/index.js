import React from 'react';
import './TodoCounter.css';
import {TodoContext} from '../TodoContext';
import { TodoBotonReset } from "../TodoBotonReset";

function TodoCounter(){
    const {
        completedTodos,
        totalTodos, 
        todoFinalizado,
        deleteTodos
    } = React.useContext(TodoContext);

    return (
        todoFinalizado === true ? 
            <div className='Container-TodoCounter Container--finalizado'>
                <p className='TodoCounter--finalizado'>¡Felicidades!
                </p>
                <p className='TodoCounter--finalizado'>
                    has completado tus <span>{totalTodos}</span> TODOs
                </p>
                <TodoBotonReset
                    onDeleteTodos={() => deleteTodos()}
                />
            </div> : 
            <div className="Container-TodoCounter Container--enProgreso">
                <p className='TodoCounter'>
                    Has completado
                </p>
                <p className='TodoCounter'>
                    <span>{completedTodos}</span> 
                    de <span>{totalTodos}</span> TODOs
                </p>
            </div>
    );
}

export {TodoCounter};