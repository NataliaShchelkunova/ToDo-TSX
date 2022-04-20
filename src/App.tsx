import { useEffect, useState } from "react";
import axios from "axios";
import AllTasks from "./types/types";
import ContainerComponent from "./components/containerComponent/ContainerComponent";
import AddTaskComponent from "./components/addTaskComponent/AddTaskComponent";
import "./App.scss";

const App = () => {
  const [toDo, setToDo] = useState<AllTasks[]>([]);
  const [item, setItem] = useState<Object>({});

  useEffect(() => {
    axios.get<AllTasks[]>("http://localhost:8000/allTasks").then((resp) => {
      setToDo(resp.data);
    });
  }, []);

  return (
    <div>
      <div className="line-input-and-button">
        <AddTaskComponent setToDo={setToDo} />
      </div>
      <ContainerComponent toDo={toDo} setToDo={setToDo} setItem={setItem} />
      <div className="toDoList"></div>
    </div>
  );
};

export default App;
