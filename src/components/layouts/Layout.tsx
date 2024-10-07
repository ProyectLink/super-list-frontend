"use client";
import LayoutApplication from "@/components/layouts/LayoutApplication";
import LayoutApplicationNavigation from "@/components/layouts/LayoutApplicationNavigation";
import LayoutApplicationSection from "@/components/layouts/LayoutApplicationSection";
import Navigation from "@/components/navigation/Navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Outlet, useParams } from "react-router-dom";
import Pricing from "../navigation/Pricing";

const Layout = ({ main }: { main: React.ReactNode }) => {
  const params = useParams();

  return (
    <>
      <LayoutApplication>
        <LayoutApplicationNavigation>
          <Navigation />
        </LayoutApplicationNavigation>

        <LayoutApplicationSection>{main}</LayoutApplicationSection>

        {/* Dialog for Pricing */}
        <Dialog>
          <DialogContent className="h-[90vh] w-[90vw] max-w-[600px]">
            <Pricing />
          </DialogContent>
        </Dialog>

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
