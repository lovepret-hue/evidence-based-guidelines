import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

const NavDropdown = ({ item, level = 0, className = "" }) => {
  return (
    <div className="relative group">
      {/* Menu Title */}
      <div
        className={`flex items-center gap-1 cursor-pointer py-2 ${className}`}
      >
        {item.path ? (
          <Link to={item.path}>{item.title}</Link>
        ) : (
          <span>{item.title}</span>
        )}

        {item.children &&
          (level === 0 ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          ))}
      </div>

      {/* Dropdown */}
      {item.children && (
        <div
          className={`
            absolute bg-white shadow-lg rounded-md border min-w-[260px]
            hidden group-hover:block z-50
            ${level === 0 ? "left-0 top-full" : "left-full top-0"}
          `}
        >
          {item.children.map((child) => (
            <div key={child.title} className="relative group/item">
              {child.children ? (
                <>
                  <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                    <span>{child.title}</span>
                    <ChevronRight size={14} />
                  </div>

                  <div className="absolute left-full top-0 bg-white shadow-lg rounded-md border min-w-[260px] hidden group-hover/item:block">
                    {child.children.map((subChild) =>
                      subChild.children ? (
                        <NavDropdown
                          key={subChild.title}
                          item={subChild}
                          level={level + 1}
                        />
                      ) : (
                        <Link
                          key={subChild.title}
                          to={subChild.path}
                          className="block px-4 py-3 hover:bg-gray-100 whitespace-nowrap"
                        >
                          {subChild.title}
                        </Link>
                      )
                    )}
                  </div>
                </>
              ) : (
                <Link
                  to={child.path}
                  className="block px-4 py-3 hover:bg-gray-100 whitespace-nowrap"
                >
                  {child.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;