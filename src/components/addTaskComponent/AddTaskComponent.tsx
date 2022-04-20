import { FC, useState, ChangeEvent } from "react";
import axios from "axios";
import AllTasks from "../../types/types";
import "./addTaskComponent.scss";

interface AddTaskProps {
  setToDo: (value: AllTasks[]) => void;
}

const AddTaskComponent: FC<AddTaskProps> = ({ setToDo }) => {
  const [text, setText] = useState<string>("");

  const addNewTask = (): void => {
    text.trim()
      ? axios
          .post("http://localhost:8000/createTask", {
            text,
            isCheck: false,
          })
          .then((res) => {
            setToDo(res.data);
            setText("");
          })
      : alert("Fill in the field");
  };

  return (
    <div className="one-line-input-and-button">
      <input
        className="add-task-input"
        type="text"
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <button onClick={addNewTask}> ADD TASK</button>
    </div>
  );
};

export default AddTaskComponent;
