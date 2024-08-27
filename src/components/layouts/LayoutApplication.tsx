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
        className={twMerge("min-h-dvh max-h-dvh bg-black", className)}
      >
        {children}
      </div>
    </>
  );
};

export default LayoutApplication;
