import React from "react";
import { twMerge } from "tailwind-merge";

interface AlertContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const AlertContainer = ({
  children,
  className,
  ...rest
}: AlertContainerProps) => {
  return (
    <>
      <div
        {...rest}
        className={twMerge(
          "flex items-center justify-between w-full gap-2 px-2 py-2 mt-3 text-indigo-400 bg-gray-100 rounded-2xl",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default AlertContainer;
