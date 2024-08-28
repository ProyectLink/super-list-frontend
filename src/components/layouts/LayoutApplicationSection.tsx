import React from "react";
import { twMerge } from "tailwind-merge";

interface LayoutApplicationSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const LayoutApplicationSection = ({
  children,
  className,
  ...rest
}: LayoutApplicationSectionProps) => {
  return (
    <>
      <div
        {...rest}
        className={twMerge(
          "flex-1 my-2 bg-white rounded-2xl overflow-hidden",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default LayoutApplicationSection;
