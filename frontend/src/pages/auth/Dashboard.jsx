import React, { useState } from "react";
import {
  Users,
  ShoppingCart,
  DollarSign,
  BarChart3,
} from "lucide-react";

import Sidebar from '../../components/dashboard/Sidebar'
import Header from '../../components/dashboard/Header'
import Breadcrumb from '../../components/dashboard/Breadcrumb'
import DashboardCard from '../../components/dashboard/DashboardCard'
import DataTable from '../../components/dashboard/DataTable'

const orders = [
  {
    id: 1,
    customer: "John Doe",
    product: "Website Design",
    amount: "$450",
    status: "Completed",
    date: "07 Sep 2026",
  },
  {
    id: 2,
    customer: "Sarah Smith",
    product: "Mobile App",
    amount: "$850",
    status: "Pending",
    date: "06 Sep 2026",
  },
  {
    id: 3,
    customer: "Michael Brown",
    product: "Dashboard UI",
    amount: "$600",
    status: "Completed",
    date: "05 Sep 2026",
  },
  {
    id: 4,
    customer: "Emily Wilson",
    product: "Landing Page",
    amount: "$300",
    status: "Cancelled",
    date: "04 Sep 2026",
  },
];

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const cards = [
    {
      title: "Total Users",
      value: "24,562",
      percentage: "+12.5%",
      icon: Users,
      increase: true,
    },
    {
      title: "Total Orders",
      value: "8,456",
      percentage: "+8.2%",
      icon: ShoppingCart,
      increase: true,
    },
    {
      title: "Revenue",
      value: "$45,250",
      percentage: "+15.8%",
      icon: DollarSign,
      increase: true,
    },
    {
      title: "Growth",
      value: "24.8%",
      percentage: "-2.4%",
      icon: BarChart3,
      increase: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      {/* Main */}
      <div className={`
          transition-all duration-300
          ${isCollapsed ? "lg:ml-20" : "lg:ml-64"}
        `}>
        <Header setIsOpen={setIsOpen} />

        <main className="p-4 sm:p-6 lg:p-8">
          {/* Breadcrumb */}
          <Breadcrumb items={["Dashboard"]} />

          {/* Page Heading */}
          <div className="mb-6">
            <h1 className="text-xl font-bold text-gray-800 sm:text-3xl">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Welcome back! Here's what's happening today.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => (
              <DashboardCard
                key={card.title}
                {...card}
              />
            ))}
          </div>

          {/* Table */}
          <div className="mt-6">
            <DataTable data={orders} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;