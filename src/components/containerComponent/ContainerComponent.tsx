import { FC } from "react";
import AllTasks from "../../types/types";
import TaskComponent from "./taskComponent/TaskComponent";
import "./containerComponent.scss";

interface UserListcomponentProps {
  toDo: AllTasks[];
  setToDo: (value: AllTasks[]) => void;
  setItem: (value: object) => void;
}

const TaskContainerComponent: FC<UserListcomponentProps> = ({
  toDo,
  setToDo,
  setItem,
}) => {
  return (
    <div className="all-tasks-container">
      {toDo
        .sort((a, b) =>
          a.isCheck > b.isCheck ? 1 : a.isCheck < b.isCheck ? -1 : 0,
        )
        .map((task: AllTasks, index: Number) => (
          <TaskComponent task={task} setToDo={setToDo} setItem={setItem} />
        ))}
    </div>
  );
};

export default TaskContainerComponent;
