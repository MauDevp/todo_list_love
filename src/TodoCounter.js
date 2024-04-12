import './TodoCounter.css';

function TodoCounter({completadas, total}){
    return (
        <div>
            <h1 className='TodoCounter'>
                Has completado <span>{completadas}</span> 
                de <span>{total}</span> TODOs
            </h1>
        </div>
    );
}

export {TodoCounter};