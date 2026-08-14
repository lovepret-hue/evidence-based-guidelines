import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
const MobileMenu = ({ isOpen, setIsOpen, navigation }) => {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold text-lg">Centre for Evidence Based Guidelines </h2>

          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="p-4">
          {navigation.map((item, index) => (
            <div key={index} className="border-b">
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setActive(
                        active === index ? null : index
                      )
                    }
                    className="w-full flex justify-between items-center py-3"
                  >
                    {item.title}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        active === index
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {active === index && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link to={child.path}
                          key={child.title}
                          className="block py-2 text-gray-600"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.path}
                  className="block py-3"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;