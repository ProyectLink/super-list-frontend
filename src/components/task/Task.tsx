import { ArrowRight, UserIcon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { twMerge } from "tailwind-merge";
import React from "react";
import { useParams } from "react-router-dom";

interface TaskProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  className?: string;
  id: string;
  onClick: () => void;
}

const Task = ({ id, onClick, className, title, ...rest }: TaskProps) => {
  const params = useParams();

  return (
    <>
      <div
        {...rest}
        className={twMerge(
          `flex items-center w-full gap-2 py-1 group/task ps-8 pe-3 text-black ${
            id === params.taskId
              ? "bg-indigo-50 border-r-orange-500 border-r-2"
              : ""
          }`,
          className
        )}
      >
        <Checkbox id="task" className="border-2 opacity-20" />
        <Label
          className="text-md grow font-[500] hover:cursor-pointer opacity-85"
          onClick={onClick}
        >
          {title}
        </Label>

        <button className="flex items-center justify-center invisible w-4 h-4 text-white bg-gray-400 rounded-full hover:bg-black group-hover/task:visible">
          <UserIcon className="w-3 h-3" />
        </button>

        <button
          className="flex items-center justify-center invisible w-4 h-4 text-white bg-gray-500 rounded-full hover:bg-black group-hover/task:visible"
          onClick={onClick}
        >
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </>
  );
};

export default Task;
