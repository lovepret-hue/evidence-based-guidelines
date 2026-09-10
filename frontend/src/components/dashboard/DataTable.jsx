import React from "react";

const DataTable = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Table Header */}
      <div className="flex items-center justify-between border-b px-5 py-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Orders
          </h2>

          <p className="text-sm text-gray-400">
            Latest transactions
          </p>
        </div>

        <button className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
          View All
        </button>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                Customer
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                Product
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                Amount
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                Status
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                Date
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {data.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                      {item.customer.charAt(0)}
                    </div>

                    <span className="font-medium text-gray-700">
                      {item.customer}
                    </span>
                  </div>
                </td>

                <td className="px-5 py-4 text-sm text-gray-500">
                  {item.product}
                </td>

                <td className="px-5 py-4 text-sm font-semibold text-gray-700">
                  {item.amount}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`
                      rounded-full px-3 py-1 text-xs font-medium
                      ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : item.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }
                    `}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm text-gray-500">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;