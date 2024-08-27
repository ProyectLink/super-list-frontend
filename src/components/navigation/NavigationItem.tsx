import React from "react";
import { twMerge } from "tailwind-merge";

interface NavigationItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const NavigationItem = ({
  className,
  children,
  ...rest
}: NavigationItemProps) => {
  return (
    <>
      <div {...rest} className={twMerge("", className)}>
        {children}
      </div>
    </>
  );
};

export default NavigationItem;
