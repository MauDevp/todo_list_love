import "./TodoBotonReset.css";

function TodoBotonReset(props){
    return(
        <button 
            className="CircleButton"
            onClick={props.onDeleteTodos}
            >
            R
        </button>
    );
}

export { TodoBotonReset };