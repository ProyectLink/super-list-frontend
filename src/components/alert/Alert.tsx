import { ArrowUpRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import AlertContainer from "./AlertContainer";
import AlertIcon from "./AlertIcon";
import AlertMessage from "./AlertMessage";
import AlertButtonsSection from "./AlertButtonsSection";
import ButtonIcon from "../button/Button";

interface Alerts extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
}

const Alert = ({ message }: Alerts) => {
  return (
    <>
      <AlertContainer>
        <AlertIcon />
        <AlertMessage message={message} />
        <AlertButtonsSection>
          <ButtonIcon icon={<ArrowUpRightIcon className="w-5 h-5" />} />
          <ButtonIcon icon={<XMarkIcon className="w-5 h-5" />} />
        </AlertButtonsSection>
      </AlertContainer>
    </>
  );
};

export default Alert;
