import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import NavigationContainer from "./NavigationContainer";
import NavigationItem from "./NavigationItem";
import {
  CheckBadgeIcon,
  CalendarDaysIcon,
  InboxIcon,
  BoltIcon,
  BellIcon,
  ListBulletIcon
} from "@heroicons/react/24/outline";



export const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <>
      <NavigationContainer className="flex flex-col justify-between h-full">
        <div className="mt-20">
          <NavigationItem onMouseOver={() => setActiveIndex(0)}
        onMouseLeave={() => setActiveIndex(-1)}
        active={activeIndex === 0}>
            <InboxIcon strokeWidth={2} className="w-4 h-4 text-orange-500" />
            <p className="font-[400]">Inbox</p>
          </NavigationItem>
          <NavigationItem onMouseOver={() => setActiveIndex(1)}
        onMouseLeave={() => setActiveIndex(-1)}
        active={activeIndex === 1}>
            <CalendarDaysIcon
              strokeWidth={2}
              className="w-4 h-4 text-orange-500"
            />
            <p className="font-[400] ">Today</p>
          </NavigationItem>
          <NavigationItem onMouseOver={() => setActiveIndex(2)}
        onMouseLeave={() => setActiveIndex(-1)}
        active={activeIndex === 2}>
            <CheckBadgeIcon
              strokeWidth={2}
              className="w-4 h-4 text-orange-500"
            />
            <p className="font-[400]">Tasks</p>
          </NavigationItem>
          <NavigationItem onMouseOver={() => setActiveIndex(3)}
        onMouseLeave={() => setActiveIndex(-1)}
        active={activeIndex === 3}>
            <BellIcon
              strokeWidth={2}
              className="w-4 h-4 text-orange-500"
            />
            <p className="font-[400]">Updates</p>
          </NavigationItem>
          <NavigationItem onMouseOver={() => setActiveIndex(4)}
        onMouseLeave={() => setActiveIndex(-1)}
        active={activeIndex === 4}>
            <ListBulletIcon
              strokeWidth={2}
              className="w-4 h-4 text-orange-500"
            />
            <p className="font-[400]">Lists</p>
          </NavigationItem>      
       <p className="mt-3 ml-5 font-[500] text-gray-400 text-s">Favourites</p>
        <NavigationItem onMouseOver={() => setActiveIndex(5)}
        onMouseLeave={() => setActiveIndex(-1)}
        active={activeIndex === 5}>
        <span role="img" aria-label="Waving Hand" className="w-2 h-6 text-orange-500">👋</span>
          <p className="font-[400] ml-3">Getting Started</p>
          </NavigationItem>
          </div>
         
        <div className="flex flex-col gap-2 px-3">
          <button className="flex items-center justify-center w-full gap-1 py-2 font-semibold text-indigo-500 border rounded-full hover:text-black hover:border-gray-300">
            <BoltIcon className="w-4 h-4" />
            Upgrade to Pro
          </button>
          <div className="flex items-center gap-1 px-3 mb-3">
            <div className="flex items-center justify-center w-10 h-10 transition duration-200 border rounded-full hover:bg-gray-200 hover:cursor-pointer">
              <Avatar className="w-7 h-7">
                <AvatarImage src="https://avatars.githubusercontent.com/u/119996547?s=96&v=4" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center h-8 gap-1 font-semibold text-gray-500 bg-gray-200 rounded-full w-max ps-3 grow hover:cursor-pointer hover:bg-gray-300 hover:text-gray-900">
              <PlusIcon className="w-4 h-4" /> Create new
            </div>
          </div>
        </div>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
