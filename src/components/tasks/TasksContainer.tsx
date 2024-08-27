import React from "react";
import { twMerge } from "tailwind-merge";

interface TasksContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const TasksContainer = ({ className, ...rest }: TasksContainerProps) => {
  return (
    <>
      <div {...rest} className={twMerge("", className)}></div>
    </>
  );
};

export default TasksContainer;
