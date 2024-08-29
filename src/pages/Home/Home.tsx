import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen border-t-[1rem] border-[#F74F39] bg-[#F4F3FA] text-foreground">
        {/* navbar */}
        <div className="flex items-center justify-between px-10 pt-10">
          {/* left options */}
          <div className="flex items-center gap-3 font-semibold">
            <img src="/icon.png" className="size-5" />
            <img src="/logo.svg" className="h-5 mt-auto" />
            <div className="hover:opacity-60 hover:cursor-pointer">Web</div>
            <div className="hover:opacity-60 hover:cursor-pointer">iOS</div>
            <div className="hover:opacity-60 hover:cursor-pointer">Android</div>
          </div>
          {/* right options */}
          <div className="flex font-semibold gap-9">
            <div className="hover:opacity-60 hover:cursor-pointer">Updates</div>
            <div className="text-[#F74F39] hover:cursor-pointer">
              Sign in{" "}
              <span>
                <ArrowRight
                  className="inline rotate-[355deg]"
                  strokeWidth={4}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
