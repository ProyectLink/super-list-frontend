import Alert from "../../components/alert/Alert";
import TasksContainer from "../../components/tasks/TasksContainer";

export const Today = () => {
  return (
    <>
      <TasksContainer>
        <div className="w-11/12 mx-auto">
          <div className="mt-10 text-5xl font-bold opacity-85">Today</div>
          <Alert message={"See what's due today and review any overdue tasks"}/>
        </div>
        {/* Add a new task component */}
        <img src="/empty.png" className="mt-5 ms-5" />
      </TasksContainer>
    </>
  );
};

export default Today;
