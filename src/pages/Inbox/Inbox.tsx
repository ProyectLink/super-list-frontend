import Alert from "../../components/alert/Alert";
import TasksContainer from "../../components/tasks/TasksContainer";

export const Inbox = () => {
  return (
    <>
      <TasksContainer>
        <div className="w-11/12 mx-auto">
          <div className="mt-10 text-5xl font-bold opacity-85">Inbox</div>
          <Alert message={"Manage all new and incoming tasks - create, move, schedule, and more"}/>
        </div>
        {/* Add a new task component */}
        <img src="/empty.png" className="mt-5 ms-5" />
      </TasksContainer>
    </>
  );
};

export default Inbox;
