import React from "react";
import { twMerge } from "tailwind-merge";

interface LayoutApplicationNavigationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const LayoutApplicationNavigation = ({
  children,
  className,
  ...rest
}: LayoutApplicationNavigationProps) => {
  return (
    <>
      <div {...rest} className={twMerge("", className)}>
        {children}
      </div>
    </>
  );
};

export default LayoutApplicationNavigation;
