import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoWraper } from './TodoWraper';
import React from 'react';


const defaultTodos = [
  {Text: 'Cortar cebolla', Completed: true},
  {Text: 'Tomar el curso de introducción a React.js', Completed: false},
  {Text: 'Llorar con la Llorona', Completed: true},
  {Text: 'Comprar tomates', Completed: false},
];

function App() {
  const [todos, setTodos] = 
  React.useState(defaultTodos);

  const [searchValue, setSearchValue] = 
  React.useState('');

  const completedTodos = todos.filter(todo => !!todo.Completed).length;
  const totalTodos = todos.length;

  console.log('Los usuarios buscan TODOs de: ' + searchValue);

  return (
    <>
      <TodoWraper> 
      <TodoCounter 
        completadas={completedTodos} 
        total={totalTodos} 
      />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList >
          {defaultTodos.map(todo => (
            <TodoItem 
              key={todo.Text} 
              Text={todo.Text}
              Completed={todo.Completed}
            />
          ))}
        </TodoList>
        <CreateTodoButton/>
      </TodoWraper>

    </>
  );
}

export default App;
