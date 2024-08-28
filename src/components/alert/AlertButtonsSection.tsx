interface AlertButtonsSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const AlertButtonsSection = ({
  children,
  ...rest
}: AlertButtonsSectionProps) => {
  return (
    <>
      <div className="flex gap-2" {...rest}>
        {children}
      </div>
    </>
  );
};

export default AlertButtonsSection;
