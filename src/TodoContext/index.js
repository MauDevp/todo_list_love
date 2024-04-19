import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    const {
        item: todos,
        saveItems: saveTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V2", []);
    const [searchValue, setSearchValue] = React.useState("");

    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;

    console.log("Log 1");

    const searchedTodos = todos.filter((todos) => {
        const todosText = todos.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todosText.includes(searchText);
    });

    const todoFinalizado = completedTodos === totalTodos && totalTodos > 0;

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todos) => todos.text === text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todos) => todos.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            todoFinalizado,
            error,
            loading,
        }}>
            {children}
        </TodoContext.Provider>
    );
}



export { TodoContext, TodoProvider };