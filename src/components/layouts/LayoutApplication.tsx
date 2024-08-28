import React from "react";
import { twMerge } from "tailwind-merge";

interface LayoutApplicationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const LayoutApplication = ({
  children,
  className,
  ...rest
}: LayoutApplicationProps) => {
  return (
    <>
      <div
        {...rest}
        className={twMerge(
          "min-h-dvh max-h-dvh flex w-full gap-2 bg-indigo-50",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default LayoutApplication;
