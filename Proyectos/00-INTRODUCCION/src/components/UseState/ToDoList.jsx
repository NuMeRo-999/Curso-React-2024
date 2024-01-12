import { useState } from "react";
import idGenerator from "../../helpers/idGenerator";

const initialState = [
  {
    id: 1,
    title: "Comprar pan",
    completed: false,
  },
  {
    id: 2,
    title: "Pasea al perro",
    completed: true,
  },
  {
    id: 3,
    title: "Aprender React",
    completed: false,
  },
];


const ToDoList = () => {
  const [tasks, setTasks] = useState(initialState);
  const [newTask, setNewTask] = useState('');

  function handleToggleCompleted(taskId) {
    const updateTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed : !task.completed } : task
    );
    setTasks(updateTasks);
  }

  function handleRemoveTask(taskId) {
    const updateTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updateTasks);
  }

  function handleAddTask(e) {
    e.preventDefault();

    if(newTask.trim !== "") {
      const newTaskObject = {
        id: idGenerator(),
        title: newTask.trim(),
        completed: false
      }

      setTasks([...tasks, newTaskObject ]);
      setNewTask('');
    }

  }

  return (
    <>
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-orange-50 shadow-md rounded-md">
        <h1 className="text-4xl mb-4 font-bold uppercase text-center">ToDo List</h1>
        <div className="flex mb-4">
          <input type="text" placeholder="Nueva tarea" value={newTask} onChange={(e) => setNewTask(e.target.value)} /*onKeyDown={}*/ className="flex-1 mr-2 mt-4 p-2 border rounded-md focus:outline-none focus:border-blue-500" />
          <button onClick={handleAddTask} type="submit" className="bg-blue-500 text-white mr-2 mt-4 px-4 py-2 rounded-md hover:bg-blue-600">Añadir Tarea</button>
        </div>

        <div>
          <ul>
            {
              tasks.map((task) => (
                <li key={task.id} className="flex items-center mb-2">
                  <input onChange={() => handleToggleCompleted(task.id)} type="checkbox" className="mr-2" name="" id="" checked={task.completed}/>
                  <span className={`default ${ task.completed ? 'line-through' : ''} text-xl `}>{task.title}</span>
                  <button onClick={() => handleRemoveTask(task.id)} className=" text-white px-3 py-1 ml-auto rounded-lg bg-red-400  hover:bg-red-500">Eliminar</button>
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    </>
  )
}

export default ToDoList