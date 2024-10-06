import Alert from "../../components/alert/Alert";
import TasksContainer from "../../components/tasks/TasksContainer";
import {
} from "@heroicons/react/24/outline";
import { CgSortAz } from "react-icons/cg";

const Inbox = () => {
  
  return (
    <>
    <div className="flex justify-end w-full mt-5 ">
    <div className="flex items-center h-8 mr-5 font-semibold bg-gray-100 rounded-full  p-1  hover:cursor-pointer hover:bg-gray-300 hover:text-gray-900">
    <CgSortAz className="w-6 h-6 text-gray-400"/>
    </div>
    </div>
    
    <TasksContainer>
      <div className="w-[92.9%] mx-auto">
        <div className="mt-5 mb-5 text-5xl font-bold opacity-85">Inbox</div>
        <Alert message="Manage all new and incoming tasks-create, move, schedule, and more"/>
      </div>
      <div className="ml-5 mt-5 flex items-center  ">
      <img src="./add-task.png" ></img><span className="ml-2 font-semibold text-gray-400">New Task</span>
      <span className="flex  font-semibold text-gray-500 bg-gray-200 rounded-full ml-2 pr-2 pl-2 hover:cursor-pointer hover:bg-gray-300 hover:text-gray-900">
               Alt+N
            </span>
      </div>
      <div className="mt-1">
      <img src="./empty.png"></img>
      </div>
    </TasksContainer>
  </>
  )
}



export default Inbox