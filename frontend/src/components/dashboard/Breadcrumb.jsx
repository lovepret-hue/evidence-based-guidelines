import React from "react";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = ({ items = [] }) => {
  return (
    <div className="mb-6 flex items-center gap-2 text-sm">
      <Home size={16} className="text-gray-400" />

      <span className="text-gray-400">Home</span>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={15} className="text-gray-400" />

          <span
            className={
              index === items.length - 1
                ? "font-medium text-gray-800"
                : "text-gray-400"
            }
          >
            {item}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;