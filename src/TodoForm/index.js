import React from "react";
import './TodoForm.css';

function TodoForm() {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
            }}
            className="TodoForm-container">
            <label className="TodoForm-label">Escribe tu nuevo TODO</label>
            <textarea
                className="TodoForm-textArea"
                placeholder="comprar verduras"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type=""
                    className="TodoForm-button TodoForm-button--cancel">
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };