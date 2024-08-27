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

        <LayoutApplicationSection className="flex-1 my-2 bg-white rounded-2xl">
          <Tasks />
        </LayoutApplicationSection>

        <LayoutApplicationSection className="flex-1 my-2 overflow-hidden bg-white rounded-2xl me-2">
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
