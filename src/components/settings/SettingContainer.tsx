import { twMerge } from "tailwind-merge";

interface SettingContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const SettingContainer = ({ className, ...rest }: SettingContainerProps) => {

  return (
    <>
      <div {...rest} className={twMerge("", className)}></div>
    </>
  );
};

export default SettingContainer;