import React from "react";
import {
  Menu,
  Bell,
  User,
} from "lucide-react";

const Header = ({ setIsOpen }) => {
  return (
    <header className="sticky top-0 z-30 h-16 border-b border-gray-200 bg-white">
      <div className="flex h-full items-center justify-between px-4 sm:px-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
          >
            <Menu size={22} />
          </button>

          {/* Search */}
          {/* <div className="hidden md:flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="w-40 bg-transparent text-sm outline-none lg:w-64"
            />
          </div> */}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notification */}
          <button className="relative rounded-lg p-2 hover:bg-gray-100">
            <Bell size={21} />

            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <User size={20} />
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-800">
                Vinod Kumar
              </p>

              <p className="text-xs text-gray-400">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;