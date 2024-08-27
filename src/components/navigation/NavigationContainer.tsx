import React from "react";
import { twMerge } from "tailwind-merge";

interface NavigationContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const NavigationContainer = ({
  className,
  ...rest
}: NavigationContainerProps) => {
  return (
    <>
      <div {...rest} className={twMerge("", className)}></div>
    </>
  );
};

export default NavigationContainer;
