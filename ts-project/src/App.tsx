import { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

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

// type TodoProps = {
//   todoList: Task[];
// }

// type CheckedProps = {
//   toggleCompleted: (e: React.ChangeEvent<HTMLInputElement>, uuid: string) => void;
// }

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

  // localStorage.removeItem('todoList')

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

  const toggleCompleted = (uuid: string) => {
    let updatedList = todoList.filter((task) => {
      if(task.uuid === uuid) {
        task.completed = !task.completed
      }

      return !task.completed
    })
    setTodoList(updatedList)
  }

  console.log(todoList, "list")

  return (

    <div>
    <form className="flex gap-2">
      <input
        type="text"
        value={todo}
        placeholder="Add Item"
        className="input input-bordered input-info w-full max-w-xs"
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button children={"Add"} onClick={addTask}/>
    </form>
  <div className="flex justify-between pt-8 pb-8">
    <p>Task</p>
    <p>Completed</p>
  </div>

        {todoList.map((task) => (
          <div key={task.uuid} className={`${task.completed ? "hidden" : "block"} flex justify-between pb-2`}>
              <p>{task.name}</p>
              <input onClick={() => toggleCompleted(task.uuid)} defaultChecked={false} type="checkbox" className="checkbox checkbox-success"/>
          </div>
        ))}
    </div>
  );
}

export default App;
