import NavigationItem from "@/components/navigation/NavigationItem";
import { ArrowRight, CheckIcon } from "lucide-react";

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
            <div className="w-full h-full p-10 bg-white col-span-full lg:col-span-2 rounded-2xl">
              <div className="flex items-center gap-2 ">
                <div className="flex -space-x-3 overflow-hidden">
                  <img
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[6]"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[5]"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[4]"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[3]"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[2]"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="font-bold text-gray-500">+6</div>
              </div>
              <p className="mt-8 text-4xl font-bold opacity-85">App Launch</p>
              <p className="w-10/12 mt-5 text-lg font-semibold">
                Hey team, here's a quick recap of what we're working on ahead of
                the launch. Feel free to add any more notes or details to the
                tasks.
              </p>

              {/* activity list container */}
              <div className="mt-8 space-y-6">
                {/* activity item (user) */}
                <div className="flex items-center justify-between gap-2">
                  <div className="bg-[#F84F39] rounded-lg size-6 flex items-center justify-center">
                    <CheckIcon size={20} className="text-white -rotate-12" />
                  </div>

                  <div className="text-xl line-through decoration-orange-500 decoration-2 text-neutral-400 grow">
                    Launch readiness
                  </div>

                  <img
                    className="rounded-full size-7"
                    src="/profile/photo-1517365830460-955ce3ccd263.avif"
                  />
                </div>

                {/* activity item (google - user) */}
                <div className="flex items-center justify-between gap-2">
                  <div className="bg-[#F84F39] rounded-lg size-6 flex items-center justify-center">
                    <CheckIcon size={20} className="text-white -rotate-12" />
                  </div>

                  <div className="text-xl line-through decoration-orange-500 decoration-2 text-neutral-400 grow">
                    Value proposition
                  </div>

                  <div className="flex gap-3">
                    <img className="rounded-full size-7" src="/google.webp" />
                    <img
                      className="rounded-full size-7"
                      src="/profile/photo-1500648767791-00dcc994a43e.avif"
                    />
                  </div>
                </div>

                {/* activity item (google - user) off */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center justify-center border-2 rounded-lg size-6 group/checkbox border-neutral-400 text-neutral-400">
                    <CheckIcon
                      size={18}
                      className="invisible group-hover/checkbox:visible -rotate-12"
                    />
                  </div>

                  <div className="text-xl text-black decoration-2 grow">
                    Marketing strategy
                  </div>

                  <div className="flex gap-3">
                    <img
                      className="rounded-full size-7"
                      src="/profile/photo-1550525811-e5869dd03032.avif"
                    />
                  </div>
                </div>

                {/* activity item (linear - user) off */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center justify-center border-2 rounded-lg size-6 group/checkbox border-neutral-400 text-neutral-400">
                    <CheckIcon
                      size={18}
                      className="invisible group-hover/checkbox:visible -rotate-12"
                    />
                  </div>

                  <div className="text-xl text-black decoration-2 grow">
                    Design system update
                  </div>

                  <div className="flex gap-3">
                    <img className="rounded-full size-7" src="/linear.webp" />
                    <img
                      className="rounded-full size-7"
                      src="/profile/photo-1491528323818-fdd1faba62cc.avif"
                    />
                  </div>
                </div>

                {/* activity item (google - user) off */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center justify-center border-2 rounded-lg size-6 group/checkbox border-neutral-400 text-neutral-400">
                    <CheckIcon
                      size={18}
                      className="invisible group-hover/checkbox:visible -rotate-12"
                    />
                  </div>

                  <div className="text-xl text-black decoration-2 grow">
                    Website design & dev
                  </div>

                  <div className="flex gap-3">
                    <img className="rounded-full size-7" src="/profile.jpg" />
                  </div>
                </div>

                {/* activity item (google - user) */}
                <div className="flex items-center justify-between gap-2">
                  <div className="bg-[#F84F39] rounded-lg size-6 flex items-center justify-center">
                    <CheckIcon size={20} className="text-white -rotate-12" />
                  </div>

                  <div className="text-xl line-through decoration-orange-500 decoration-2 text-neutral-400 grow">
                    Pricing strategy
                  </div>

                  <div className="flex gap-3">
                    <img className="rounded-full size-7" src="/slack.png" />
                    <img
                      className="rounded-full size-7"
                      src="/profile/65b30376cfc91a74393dc2c4_Jon_ts9dtj.webp"
                    />
                  </div>
                </div>

                {/* activity item (google - user) off */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center justify-center border-2 rounded-lg size-6 group/checkbox border-neutral-400 text-neutral-400">
                    <CheckIcon
                      size={18}
                      className="invisible group-hover/checkbox:visible -rotate-12"
                    />
                  </div>

                  <div className="text-xl text-black decoration-2 grow">
                    Prepare analytics
                  </div>

                  <div className="flex gap-3">
                    <img
                      className="rounded-full size-7"
                      src="/profile/photo-1472099645785-5658abf4ff4e.avif"
                    />
                  </div>
                </div>
              </div>
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
