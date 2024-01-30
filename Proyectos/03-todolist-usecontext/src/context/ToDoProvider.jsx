import { useState } from "react";
import ToDoContext from "./ToDoContext"

const ToDoProvider = ({children}) => {

  const initialState = [
    {
      id: 1, texto: "Comprar pan", compleada: false
    },
    {
      id: 2, texto: "Comprar azucar", compleada: false
    },
    {
      id: 3, texto: "Aprender useContext", compleada: false
    },
  ]
  const [tasks, setTasks] = useState(initialState);

  function createTask(text) {
    const task = {id: tasks.length + 1 , texto: text, compleada: false} // No es recomendable el id así
    setTasks(...tasks, task)
  }

  function completeTask(id) {
    setTasks(tasks.map(task => task.id === id ? { ...task, completada: true } : task));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function countTasks() {
    return tasks.length;
  }

  return (
    <ToDoContext.Provider createTask={createTask} completeTask={completeTask} deleteTask={deleteTask} countTasks={countTasks}>
      {children}
    </ToDoContext.Provider>
  )
}

export default ToDoProvider