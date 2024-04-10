import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoWraper } from './TodoWraper';
import { TodoBody } from './TodoBody';


const defaultTodos = [
  {Text: 'Cortar cebolla', Completed: true},
  {Text: 'Tomar el curso de introducción a React.js', Completed: false},
  {Text: 'Llorar con la Llorona', Completed: false},
  {Text: 'Comprar tomates', Completed: true},
];

function App() {
  return (
    <>
    <TodoBody>

      <TodoWraper> 
      <TodoCounter completadas={2} total={4} />
        <TodoSearch/>
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
    </TodoBody>

    </>
  );
}

export default App;
