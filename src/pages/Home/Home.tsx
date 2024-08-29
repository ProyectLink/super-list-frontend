import NavigationItem from "@/components/navigation/NavigationItem";
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

        {/* title */}
        <div className="flex flex-col items-center mx-auto mt-20 text-5xl font-bold md:text-7xl text-neutral-800">
          <p>Home to</p>
          <div className="flex">
            <p>all your </p>
            <img src="/check.png" className="mx-2 my-auto size-11 md:size-16" />
            <p className="text-[#F74F39]">lists</p>
          </div>

          {/* message big screen */}
          <div className="hidden mt-5 text-xl font-semibold text-center opacity-60 md:block">
            <p>Take notes, organize your work, and get more done with AI.</p>
            <p>Simple, blazingly fast, and wrapped in a beautiful UI.</p>
          </div>

          {/* message small screens */}
          <div className="mt-5 text-xl font-semibold text-center opacity-60 md:hidden">
            <p>For team work, personal projects,</p>
            <p>and everything in between.</p>
          </div>

          <div className="flex gap-3 mt-5 text-lg font-bold">
            <button className="py-2 bg-[#F84F39] text-white rounded-full px-3">
              Start today — it's free{" "}
            </button>
            <button className="py-2 bg-[#6B66DA] text-white rounded-full px-3">
              Go Pro ✨
            </button>
          </div>
        </div>

        <div className="px-5">
          {/* app sample */}
          <div className="grid w-full grid-cols-4 gap-3 p-3 mx-auto mt-10 border-2 size-96 rounded-2xl border-[#EAE9F3] max-w-[1250px] h-auto mb-10">
            {/* col 1 */}
            <div className="hidden w-full h-full col-span-1 bg-white rounded-2xl lg:block">
              {/* rectangles */}
              <div className="grid grid-cols-2 gap-2 p-3">
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
              </div>

              {/* fake navigation */}
              <div className="mt-6">
                <div className="font-semibold text-gray-500 ms-3">List</div>
                <NavigationItem
                  active={true}
                  className="bg-[#F3F3F7] py-2 hover:bg-[#F3F3F7]"
                >
                  <p className="font-semibold text-gray-800">
                    <span className="me-3">💥</span> App Launch
                  </p>
                </NavigationItem>
                <NavigationItem active={false}>
                  <p className="py-2 font-semibold text-gray-800 hover:bg-[#F3F3F7]">
                    <span className="me-3">🏘️</span>Kitchen Reno
                  </p>
                </NavigationItem>
                <NavigationItem active={false}>
                  <p className="py-2 font-semibold text-gray-800 hover:bg-[#F3F3F7]">
                    <span className="me-3">🧘</span>Daily Habits
                  </p>
                </NavigationItem>
                <NavigationItem active={false}>
                  <p className="py-2 font-semibold text-gray-800 hover:bg-[#F3F3F7]">
                    <span className="me-3">🍔</span>Recipes
                  </p>
                </NavigationItem>
                <NavigationItem active={false}>
                  <p className="py-2 font-semibold text-gray-800 hover:bg-[#F3F3F7]">
                    <span className="me-3">✏️</span>Design Work
                  </p>
                </NavigationItem>
              </div>

              {/* fake user session */}
              <div className="flex items-end gap-2 px-3 pb-3 h-72">
                <div className="w-full h-10 bg-gray-200 rounded-full"></div>
                <img
                  src="/profile.jpg"
                  alt="profile"
                  className="rounded-full size-10"
                />
              </div>
            </div>

            {/* col mid */}
            <div className="w-full h-full bg-white col-span-full lg:col-span-2 rounded-2xl">
              <div className="w-full h-96"></div>
            </div>

            {/* col 3 */}
            <div className="hidden w-full h-full overflow-hidden bg-white lg:col-span-1 lg:block rounded-2xl">
              <img
                className="object-cover object-center w-full h-full"
                src="/subsets/1244429.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
