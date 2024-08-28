import { ArrowUpRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { BookOpenText } from "lucide-react";

export const Tasks = () => {
  return (
    <>
      <div className={"w-10/12 mx-auto"}>
        <div className="mt-10 text-5xl font-bold opacity-85">Tasks</div>

        <div className="flex items-center justify-between w-full gap-2 px-2 py-2 mt-3 text-indigo-400 bg-gray-100 rounded-2xl">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-8 h-8 bg-indigo-200 rounded-full">
              <BookOpenText className="w-4 text-indigo-500" />
            </div>
          </div>

          <p className="text-indigo-500">
            View, sort and access all of your tasks in one place
          </p>

          <div className="flex gap-2">
            <div className="flex items-center justify-between w-full gap-2 px-2 py-2 text-gray-500 bg-gray-200 rounded-2xl hover:text-black hover:bg-gray-300">
              <button>
                <ArrowUpRightIcon className="w-5 h-5" />
              </button>
            </div>

            <button>
              <div className="flex items-center justify-between w-full gap-2 px-2 py-2 text-gray-500 bg-gray-200 rounded-2xl hover:text-black hover:bg-gray-300">
                <button>
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
