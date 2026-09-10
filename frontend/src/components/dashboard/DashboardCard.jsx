import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const DashboardCard = ({
  title,
  value,
  icon: Icon,
  percentage,
  increase = true,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-gray-800">
            {value}
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {Icon && <Icon size={24} />}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1 text-sm">
        {increase ? (
          <ArrowUpRight size={16} className="text-green-500" />
        ) : (
          <ArrowDownRight size={16} className="text-red-500" />
        )}

        <span
          className={
            increase
              ? "font-semibold text-green-500"
              : "font-semibold text-red-500"
          }
        >
          {percentage}
        </span>

        <span className="text-gray-400">
          from last month
        </span>
      </div>
    </div>
  );
};

export default DashboardCard;