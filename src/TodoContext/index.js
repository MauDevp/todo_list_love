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
    
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter((todos) => {
        const todosText = todos.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todosText.includes(searchText);
    });

    const todoFinalizado = completedTodos === totalTodos && totalTodos > 0;

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        saveTodos(newTodos);
    };

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todos) => todos.text === text);
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todos) => todos.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    const deleteTodos = () => {
        const newTodos = [];
        localStorage.clear();
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            todoFinalizado,
            error,
            loading,
            openModal, 
            setOpenModal,
            deleteTodos,
        }}>
            {children}
        </TodoContext.Provider>
    );
}



export { TodoContext, TodoProvider };