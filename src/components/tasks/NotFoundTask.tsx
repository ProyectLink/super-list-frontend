import AlertButton from "@/components/alert/AlertButton";
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const NotFoundTask = () => {
  const navigate = useNavigate();
  return (
    <>
      <AlertButton
        className="mt-5 w-fit ms-5"
        icon={<XMarkIcon className="w-5 h-5" />}
        onClick={() => navigate("/all-tasks")}
      />
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto text-center max-w-64">
        <InformationCircleIcon className="w-8 h-8 text-orange-500" />
        <h3 className="text-2xl font-bold opacity-80">Task not found</h3>
        <p className="font-semibold opacity-80">
          The Task you're trying to access cannot be reached
        </p>
      </div>
    </>
  );
};

export default NotFoundTask;
