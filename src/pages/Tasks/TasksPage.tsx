import LayoutApplication from "@/components/layouts/LayoutApplication";
import LayoutApplicationNavigation from "@/components/layouts/LayoutApplicationNavigation";
import LayoutApplicationSection from "@/components/layouts/LayoutApplicationSection";
import Navigation from "@/components/navigation/Navigation";

const TasksPage = () => {
  return (
    <>
      <LayoutApplication className="flex w-full gap-2 bg-neutral-900">
        <LayoutApplicationNavigation className="bg-neutral-800 w-60">
          <Navigation />
        </LayoutApplicationNavigation>

        <LayoutApplicationSection className="my-2 grow rounded-2xl bg-neutral-800">
          <div></div>
        </LayoutApplicationSection>

        <LayoutApplicationSection className="my-2 rounded-2xl grow bg-neutral-800 me-2">
          <div></div>
        </LayoutApplicationSection>
      </LayoutApplication>
    </>
  );
};

export default TasksPage;
