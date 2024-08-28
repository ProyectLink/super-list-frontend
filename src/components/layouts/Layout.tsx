import LayoutApplication from "@/components/layouts/LayoutApplication";
import LayoutApplicationNavigation from "@/components/layouts/LayoutApplicationNavigation";
import LayoutApplicationSection from "@/components/layouts/LayoutApplicationSection";
import Navigation from "@/components/navigation/Navigation";
import { Outlet, useParams } from "react-router-dom";

const Layout = ({ main }: { main: React.ReactNode }) => {
  const params = useParams();
  return (
    <>
      <LayoutApplication>
        <LayoutApplicationNavigation>
          <Navigation />
        </LayoutApplicationNavigation>

        <LayoutApplicationSection>{main}</LayoutApplicationSection>

        <LayoutApplicationSection className="hidden me-2 lg:block">
          {Object.keys(params).length === 0 ? (
            <img
              src="/subsets/1496373.jpg"
              className="object-cover object-center w-full h-full"
            />
          ) : (
            <Outlet />
          )}
        </LayoutApplicationSection>
      </LayoutApplication>
    </>
  );
};

export default Layout;
