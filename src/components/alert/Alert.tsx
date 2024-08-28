import { ArrowUpRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import AlertContainer from "./AlertContainer";
import AlertIcon from "./AlertIcon";
import AlertMessage from "./AlertMessage";
import AlertButtonsSection from "./AlertButtonsSection";
import ButtonIcon from "../button/Button";

const Alert = () => {
  return (
    <>
      <AlertContainer>
        <AlertIcon />
        <AlertMessage
          message={" View, sort and access all of your tasks in one place"}
        />
        <AlertButtonsSection>
          <ButtonIcon icon={<ArrowUpRightIcon className="w-5 h-5" />} />
          <ButtonIcon icon={<XMarkIcon className="w-5 h-5" />} />
        </AlertButtonsSection>
      </AlertContainer>
    </>
  );
};

export default Alert;
