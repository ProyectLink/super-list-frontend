import React from "react";
import { twMerge } from "tailwind-merge";

interface NavigationItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  active: boolean;
}

export const NavigationItem = ({
  className,
  children,
  active = false,
  ...rest
}: NavigationItemProps) => {
  return (
    <>
      <div
        {...rest}
        className={twMerge(
          `flex items-center gap-2 ps-5 hover:bg-gray-100 py-1 hover:cursor-pointer ${
            active ? "border-r-2 border-orange-500 bg-gray-100" : ""
          }`,
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default NavigationItem;
