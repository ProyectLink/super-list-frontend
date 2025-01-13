import { BoltIcon } from "@heroicons/react/24/outline";
import { PlusIcon, Settings } from "lucide-react";
import {
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export const ProfileDropdown = () => {
    return (
        <>
            <DropdownMenuLabel>
                <button className="flex items-center w-full gap-1 text-gray-500 hover:cursor-pointer">
                    <PlusIcon className="w-4 h-4" /> New team
                </button>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>
                <button className="flex items-center w-full gap-1 text-indigo-500 hover:cursor-pointer">
                    <BoltIcon className="w-4 h-4" />Upgrade to Pro
                </button>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>
                <button className="flex items-center w-full gap-1 text-gray-500 hover:cursor-pointer">
                    <Settings className="w-4 h-4" />Settings
                </button>
            </DropdownMenuLabel>
        </>
    );
}
