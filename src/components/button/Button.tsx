import { twMerge } from "tailwind-merge";

interface ButtonIconProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  icon: React.ReactNode;
}

const ButtonIcon = ({ className, icon, ...rest }: ButtonIconProps) => {
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

export default ButtonIcon;
