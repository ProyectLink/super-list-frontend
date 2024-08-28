import ButtonIcon from "@/components/button/Button";
import NotFoundTask from "@/components/tasks/NotFoundTask";
import { FAKE_TASK_DATA } from "@/data/task";
import { ITask } from "@/interfaces/interfaces";
import { UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CalendarDays, EllipsisVerticalIcon, Tag } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const SubTask = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const task = FAKE_TASK_DATA.find((i: ITask) => i.id === params.taskId);
  return (
    <>
      {task ? (
        <div>
          <div className="flex flex-col pb-3 min-h-40 bg-neutral-100">
            <div className="flex justify-between px-5 pt-5">
              <ButtonIcon
                className="w-fit"
                icon={<XMarkIcon className="w-5 h-5" />}
                onClick={() => navigate("/all-tasks")}
              />
              <ButtonIcon
                className="w-fit"
                icon={<EllipsisVerticalIcon className="w-5 h-5" />}
                onClick={() => navigate("/all-tasks")}
              />
            </div>
            <div className="flex justify-between px-5 pt-5">
              <div className="flex flex-col">
                <p className="mb-3 text-3xl font-bold opacity-75">
                  {task.title}
                </p>
                <div className="flex flex-wrap">
                  <button className="flex items-center gap-1 px-2 text-sm transition duration-200 rounded-full hover:bg-gray-300 w-fit">
                    <CalendarDays size={14} /> Today
                  </button>
                  <button className="flex items-center gap-1 p-1 text-sm transition duration-200 rounded-full hover:bg-gray-300 w-fit">
                    <Tag size={14} />
                  </button>
                </div>
              </div>
              <div>
                <button className="flex items-center justify-center w-6 h-6 text-white bg-gray-400 rounded-full hover:bg-black">
                  <UserIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <img src="/empty.png" className="mt-5 ms-5" />
        </div>
      ) : (
        <NotFoundTask />
      )}
    </>
  );
};

export default SubTask;
