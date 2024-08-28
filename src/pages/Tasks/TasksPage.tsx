import LayoutApplication from "@/components/layouts/LayoutApplication";
import LayoutApplicationNavigation from "@/components/layouts/LayoutApplicationNavigation";
import LayoutApplicationSection from "@/components/layouts/LayoutApplicationSection";
import Navigation from "@/components/navigation/Navigation";
import Tasks from "@/components/tasks/Tasks";

const TasksPage = () => {
  return (
    <>
      <LayoutApplication>
        <LayoutApplicationNavigation>
          <Navigation />
        </LayoutApplicationNavigation>

        <LayoutApplicationSection>
          <Tasks />
        </LayoutApplicationSection>

        <LayoutApplicationSection className="hidden me-2 lg:block">
          <img
            src="/subsets/1496373.jpg"
            className="object-cover object-center w-full h-full"
          />
        </LayoutApplicationSection>
      </LayoutApplication>
    </>
  );
};

export default TasksPage;
