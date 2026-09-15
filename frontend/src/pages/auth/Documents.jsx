import React, { useState } from 'react'
import DashboardCard from '../../components/dashboard/DashboardCard'
import Breadcrumb from '../../components/dashboard/Breadcrumb'
import Header from '../../components/dashboard/Header'
import Sidebar from '../../components/dashboard/Sidebar'
const Documents = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
     <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
     />
    <div className={`
          transition-all duration-300
          ${isCollapsed ? "lg:ml-20" : "lg:ml-64"}
        `}>
        <Header setIsOpen={setIsOpen} />

        <main className="p-4 sm:p-6 lg:p-8">
          {/* Breadcrumb */}
          <Breadcrumb items={["Documents"]} />

         <div>Documents</div>
        </main>
      </div>
   
    </>
  )
}

export default Documents