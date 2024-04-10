import './TodoCounter.css';

function TodoCounter({completadas, total}){
    return (
        <div>
            <h1 >
                Has completado {completadas} de {total} TODOS
            </h1>
        </div>
    );
}

export {TodoCounter};