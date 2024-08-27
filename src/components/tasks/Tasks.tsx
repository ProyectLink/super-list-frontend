import React from "react";
import { twMerge } from "tailwind-merge";

interface TasksProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Tasks = ({ className, ...rest }: TasksProps) => {
  return (
    <>
      <div {...rest} className={twMerge("", className)}>
        <div className="mt-10 text-5xl font-bold ms-10 opacity-85">Tasks</div>
      </div>
    </>
  );
};

export default Tasks;
