import './TodoCounter.css';

function TodoCounter({completed, total, finalizado}){
    return (
        finalizado === true ? 
            <div className='Container-TodoCounter Container--finalizado'>
                <p className='TodoCounter--finalizado'>¡Felicidades! has completado tus <span>{total}</span> TODOs
                </p>
            </div> : 
            <div className="Container-TodoCounter Container--enProgreso">
                <p className='TodoCounter'>
                    Has completado <span>{completed}</span> 
                    de <span>{total}</span> TODOs
                </p>
            </div>
    );
}

export {TodoCounter};