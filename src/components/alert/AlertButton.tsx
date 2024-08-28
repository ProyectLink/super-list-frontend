import { twMerge } from "tailwind-merge";

interface AlertButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  icon: React.ReactNode;
}

const AlertButton = ({ className, icon, ...rest }: AlertButtonProps) => {
  return (
    <>
      <div
        {...rest}
        className={twMerge(
          "flex items-center justify-between w-full gap-2 px-2 py-2 text-gray-500 bg-gray-200 rounded-2xl hover:text-black hover:bg-gray-300",
          className
        )}
      >
        <button>{icon}</button>
      </div>
    </>
  );
};

export default AlertButton;
