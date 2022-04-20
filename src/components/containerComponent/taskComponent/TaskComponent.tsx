import { FC } from "react";
import axios from "axios";
import AllTasks from "../../../types/types";
import editImg from "../../../sourse/icons/edit.svg";
import deleteImg from "../../../sourse/icons/delete.svg";

interface TaskItemProps {
  task: AllTasks;
  setToDo: (value: AllTasks[]) => void;
  setItem: (value: object) => void;
}

const TaskComponent: FC<TaskItemProps> = ({ task, setToDo, setItem }) => {
  const { _id, text, isCheck } = task;

  const onChangeCheckbox = () => {
    axios
      .patch("http://localhost:8000/updateTask", {
        _id,
        isCheck: !isCheck,
      })
      .then((res) => {
        setToDo(res.data.data);
      });
  };

  const deleteTask = (id: Number) => {
    axios.delete(`http://localhost:8000/deleteTask?id=${id}`).then((resp) => {
      setToDo(resp.data.data);
    });
  };

  return (
    <div className="task-container">
      <input
        className="checkbox"
        type="checkbox"
        checked={isCheck}
        onChange={() => onChangeCheckbox()}
      />
      <span className="text-input"> {text} </span>
      <img src={deleteImg} alt="" onClick={() => deleteTask(_id)} />
    </div>
  );
};

export default TaskComponent;
