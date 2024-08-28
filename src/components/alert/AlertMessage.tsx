import { twMerge } from "tailwind-merge";

interface AlertMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  message: string;
}

const AlertMessage = ({ className, message, ...rest }: AlertMessageProps) => {
  return (
    <>
      <p {...rest} className={twMerge("text-indigo-500", className)}>
        {message}
      </p>
    </>
  );
};

export default AlertMessage;
