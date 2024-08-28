import { BookOpenText } from "lucide-react";

const AlertIcon = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center w-8 h-8 bg-indigo-200 rounded-full">
          <BookOpenText className="w-4 text-indigo-500" />
        </div>
      </div>
    </>
  );
};

export default AlertIcon;
