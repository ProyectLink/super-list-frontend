import Alert from "../alert/Alert";
import TasksContainer from "./TasksContainer";
import Task from "../task/Task";
import { useNavigate } from "react-router-dom";
import { FAKE_TASK_DATA } from "@/data/task";
import { ITask } from "@/interfaces/interfaces";

export const Tasks = () => {
  const navigate = useNavigate();
  return (
    <>
      <TasksContainer>
        <div className="w-11/12 mx-auto">
          <div className="mt-10 text-5xl font-bold opacity-85">Tasks</div>
          <Alert />
        </div>

        <div className="mt-8">
          {FAKE_TASK_DATA.map((task: ITask) => {
            return (
              <Task
                title={task.title}
                id={task.id}
                onClick={() => navigate(task.id)}
                key={task.id}
              />
            );
          })}
        </div>
      </TasksContainer>
    </>
  );
};

export default Tasks;
