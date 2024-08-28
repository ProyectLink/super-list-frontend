import Alert from "../alert/Alert";
import TasksContainer from "./TasksContainer";
import Task from "../task/Task";

export const Tasks = () => {
  return (
    <>
      <TasksContainer>
        <div className="w-11/12 mx-auto">
          <div className="mt-10 text-5xl font-bold opacity-85">Tasks</div>
          <Alert />
        </div>

        <div className="mt-8">
          <Task title="Hacer tarea 1" active={false} />
          <Task title="Hacer tarea 2" active={true} />
          <Task title="Hacer tarea 3" active={false} />
        </div>
      </TasksContainer>
    </>
  );
};

export default Tasks;
