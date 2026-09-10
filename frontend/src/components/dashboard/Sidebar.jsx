import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  LogOut,
  X,
  ChevronLeft,
  ChevronRight,
  File 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Banner",
    icon: Users,
    children: [
        {
          title: "Guidelines",
          path: "/documents/guidelines",
        },
        {
          title: "Reports",
          path: "/documents/reports",
        },
        {
          title: "Forms",
          path: "/documents/forms",
        },
    ],
  },
   {
    title: "Documents",
    icon: File ,
     children: [
        {
          title: "Guidelines",
          path: "/documents/guidelines",
        },
        {
          title: "Reports",
          path: "/documents/reports",
        },
        {
          title: "Forms",
          path: "/documents/forms",
        },
      ],
   },
  {
    title: "Orders",
    icon: ShoppingCart,
    path: "/orders",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

const Sidebar = ({
  isOpen,
  setIsOpen,
  isCollapsed,
  setIsCollapsed,
}) => {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();
  return (
    
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen
          border-r border-gray-200 bg-white
          transition-all duration-300
          lg:translate-x-0
          ${isCollapsed ? "lg:w-20" : "lg:w-64"}
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          w-64
        `}
      >
        {/* Logo */}
        <div
          className={`
            flex h-16 items-center border-b
            ${isCollapsed ? "justify-center" : "justify-between px-5"}
          `}
        >
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-blue-600">
              AdminPanel
            </h1>
          )}

          {/* Mobile Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Desktop Toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="
            absolute -right-3 top-20 hidden
            h-7 w-7 items-center justify-center
            rounded-full border border-gray-200
            bg-white text-gray-600 shadow-sm
            hover:bg-gray-50
            lg:flex
          "
        >
          {isCollapsed ? (
            <ChevronRight size={16} />
          ) : (
            <ChevronLeft size={16} />
          )}
        </button>

        {/* Navigation */}
        <nav className="p-3">
          {!isCollapsed && (
            <p className="mb-3 px-3 text-xs font-semibold uppercase text-gray-400">
              Main Menu
            </p>
          )}

          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const hasChildren = item.children?.length > 0;
              
              // Check if parent or any submenu is active
              // const isParentActive = hasChildren
              //   ? item.children.some(
              //       (child) => location.pathname === child.path
              //     )
              //   : location.pathname === item.path;


              const isParentActive = hasChildren
              ? location.pathname.startsWith(item.basePath)
              : location.pathname === item.path;

              return (
                <li key={item.title}>
                  {hasChildren ? (
                    <>
                      {/* Parent */}
                      <button
                        type="button"
                        title={isCollapsed ? item.title : ""}
                        onClick={() =>
                          setOpenMenu(
                            openMenu === item.title ? null : item.title
                          )
                        }
                        className={`
                          flex w-full items-center rounded-lg
                          py-3 text-sm font-medium transition
                          ${
                            isParentActive
                              ? "bg-blue-100 text-blue-600"
                              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                          }
                          ${
                            isCollapsed
                              ? "justify-center px-3"
                              : "justify-between px-3"
                          }
                        `}
                      >
                        <div
                          className={`flex items-center ${
                            isCollapsed ? "" : "gap-3"
                          }`}
                        >
                          <Icon size={20} />

                          {!isCollapsed && (
                            <span>{item.title}</span>
                          )}
                        </div>

                        {!isCollapsed && (
                          <svg
                            className={`h-4 w-4 transition-transform ${
                              openMenu === item.title || isParentActive
                                ? "rotate-180"
                                : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </button>

                      {/* Submenu */}
                      {!isCollapsed &&
                        (openMenu === item.title || isParentActive) && (
                          <ul className="mt-1 ml-5 space-y-1 border-l border-gray-200 pl-3">
                            {item.children.map((child) => {
                              const isChildActive =
                                location.pathname === child.path;

                              return (
                                <li key={child.title}>
                                  <Link
                                    to={child.path}
                                    className={`
                                      flex items-center rounded-lg
                                      px-3 py-2.5 text-sm transition
                                      ${
                                        isChildActive
                                          ? "bg-blue-50 font-medium text-blue-600"
                                          : "text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                                      }
                                    `}
                                  >
                                    {child.icon && (
                                      <child.icon
                                        size={17}
                                        className="mr-2"
                                      />
                                    )}

                                    <span>{child.title}</span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                    </>
                  ) : (
                    /* Normal Menu */
                    <Link
                      to={item.path}
                      title={isCollapsed ? item.title : ""}
                      className={`
                        flex items-center rounded-lg
                        py-3 text-sm font-medium transition
                        ${
                          isParentActive
                            ? "bg-blue-100 text-blue-600"
                            : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        }
                        ${
                          isCollapsed
                            ? "justify-center px-3"
                            : "gap-3 px-3"
                        }
                      `}
                    >
                      <Icon size={20} />

                      {!isCollapsed && (
                        <span>{item.title}</span>
                      )}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 w-full border-t p-3">
          <button
            title={isCollapsed ? "Logout" : ""}
            className={`
              flex w-full items-center rounded-lg
              py-3 text-sm font-medium
              text-red-500 hover:bg-red-50
              ${isCollapsed
                ? "justify-center px-3"
                : "gap-3 px-3"
              }
            `}
          >
            <LogOut size={20} />

            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;