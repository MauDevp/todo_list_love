import React from "react";
import { AppUI } from "./appUI";
import { TodoProvider } from "../TodoContext";


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
