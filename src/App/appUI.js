import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoWraper } from "../TodoWraper";
import { TodosLoading } from "../TodosLoading";
import { TodosLoadingCounter } from "../TodosLoadingCounter";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { EmptyTodosCounter } from "../EmptyTodosCounter";
import { TodoContext } from "../TodoContext";

function AppUI() {
  return (
    <>
      <TodoWraper>
        <TodoCounter />
        <TodoSearch />
        <TodoContext.Consumer> 
          {({
            searchedTodos,
            completeTodo,
            deleteTodo,
            error,
            loading,
          }) => (
            <TodoList>
            {loading &&
              <>
                <TodosLoading/>
                <TodosLoadingCounter/>
              </>
            }
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) &&
              <>
                <EmptyTodos/>
                <EmptyTodosCounter/>
              </>
            }
            {searchedTodos.map((todos) => (
              <TodoItem
                key={todos.text}
                text={todos.text}
                completed={todos.completed}
                onComplete={() => completeTodo(todos.text)}
                onDelete={() => deleteTodo(todos.text)}
              />
            ))}
            </TodoList>
          )}
        </TodoContext.Consumer>
        <CreateTodoButton />
      </TodoWraper>
    </>
  );
}

export { AppUI };
