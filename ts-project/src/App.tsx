import { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  
  return(
  <div className="App">
    <header>

    </header>
    <main>
      <h1 className="p-4">Todo List</h1>
      <Todo />
    </main>
    <footer>

    </footer>
  </div>
  )
}
type Task = {
  uuid: string;
  name: string;
  completed: boolean;
  createdAt: Date;
}

function Todo () {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Task[]>(() => {
    const todoList = localStorage.getItem('todoList')
    if(todoList) {
      return JSON.parse(todoList)
    }
    return []
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList])


  const addTask = () => {

    if(todo) {
      let newTask = {
        uuid: uuidV4(),
        name: todo,
        completed: false,
        createdAt: new Date()
      }
      addTaskToList(newTask)

      setTodo("")
    }
  }

  const addTaskToList = (task: Task) => {
    setTodoList([...todoList, task])
    // localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={todo}
        placeholder="Add Item"
        className="input input-bordered input-info w-full max-w-xs"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTask} className="btn btn-outline">Add</button>

      <div>
        {todoList.map((task) => (
          <div key={task.uuid}>
            <p>{task.name}</p>
            <input onClick={() => !task.completed} checked={task.completed} type="checkbox" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
