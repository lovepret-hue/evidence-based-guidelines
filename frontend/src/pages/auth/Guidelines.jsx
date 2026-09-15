import React, { useState } from 'react'
import Header from '../../components/dashboard/Header'
import Sidebar from '../../components/dashboard/Sidebar'
import { Link } from 'react-router-dom'
import { FiPlus,  FiEdit2, FiEye, FiTrash2, FiX, FiUpload } from "react-icons/fi";

const documents = [
  {
    id: 1,
    name: "Result of the NRI/PIO/OCI Research Support Programme Year 2026–27.",
    size: "2.4 MB",
    pdf:'#',
  },
  {
    id: 2,
    name: "Result of the Women Scientists Fellowship for the year 2026-27",
    size: "1.8 MB",
    pdf:'#',
  },
  
];
const Guidelines = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState([]);
    const [openRightSidebar, setOpenRightSidebar] = useState(false)
    const [document, setDocuments] = useState('')
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(documents.map((doc) => doc.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleView = (document) => {
    console.log("View PDF:", document.name);
  };

  const handleEdit = (document) => {
    console.log("Edit:", document.name);
  };

 const handleDelete = (document) => {
  const confirmDelete = window.confirm(
    `Are you sure you want to delete "${document.name}"?`
  );

  if (!confirmDelete) return;

  // setDocuments((prevDocuments) =>
  //    prevDocuments.filter((item) => item.id !== document.id)
  // );

  console.log("Deleted:", document.name);
};

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

        <main className="p-4 sm:p-6 lg:p-8 bg-gray-50">
         <section className='bg-white border border-gray-100 shadow rounded-lg'>
          <div className='flex justify-between border-b border-b-gray-200 pb-4 p-4'>
            <div className='text-gray-600 space-y-1'>
              <h3 className='text-xl font-semibold'>Guidelines Documents list</h3>
              <p className='text-sm'>Track stock level, availability & reorder in real time</p>
            </div>
            <button
              type='button'
              onClick={() => setOpenRightSidebar(true)}
              className="
                group inline-flex items-center justify-center gap-2
                rounded-lg px-5 py-3 bg-blue-600
                text-md font-bold text-white
                shadow-md shadow-primary/20
                transition-all duration-300
                hover:shadow-lg
                active:translate-y-0 
              "
            >
              <span>Add Documents</span>

              <FiPlus
                className="
                  text-lg transition-transform duration-300
                  group-hover:rotate-90
                "
              />
            </button>
            </div>
          <div>
             
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[700px] text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  {/* Checkbox */}
                  <th className="w-14 px-5 py-4">
                    <input
                      type="checkbox"
                      checked={
                        selected.length === documents.length &&
                        documents.length > 0
                      }
                      onChange={handleSelectAll}
                      className="
                        h-4 w-4 cursor-pointer
                        rounded border-gray-300
                        accent-blue-600
                      "
                    />
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                    Document
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                    Size
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-gray-600">
                    View PDF
                  </th>
                  <th className="px-5 py-4 text-center text-sm font-semibold text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {documents.map((document) => (
                  <tr
                    key={document.id}
                    className="
                      border-b border-gray-100
                      transition-colors duration-200
                      hover:bg-gray-50
                      last:border-b-0
                    "
                  >
                    {/* Checkbox */}
                    <td className="px-5 py-4">
                      <input
                        type="checkbox"
                        checked={selected.includes(document.id)}
                        onChange={() => handleSelect(document.id)}
                        className="
                          h-4 w-4 cursor-pointer
                          rounded border-gray-300
                          accent-blue-600
                        "
                      />
                    </td>

                    {/* Document */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="
                          flex h-10 w-10 shrink-0
                          items-center justify-center
                          rounded-lg bg-red-50
                          text-red-500
                        ">
                          <span className="text-xs font-bold">
                            PDF
                          </span>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {document.name}
                          </p>
                          <p className="mt-0.5 text-xs text-gray-400">
                            PDF Document
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Size */}
                    <td className="px-5 py-4">
                      <span className="text-sm text-gray-600">
                        {document.size}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <button
                        onClick={() => handleView(document)}
                        className="
                          inline-flex items-center gap-2
                          rounded-lg border border-gray-200
                          bg-white px-3 py-2
                          text-sm font-medium text-gray-600
                          transition-all duration-200
                          hover:border-blue-200
                          hover:bg-blue-50
                          hover:text-blue-600
                        "
                      >
                        <FiEye className="text-base" />
                        View PDF
                      </button>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-center gap-2">

                        {/* Edit */}
                        <button
                          onClick={() => handleEdit(document)}
                          title="Edit"
                          className="
                            flex h-9 w-9 items-center justify-center
                            rounded-lg border border-gray-200
                            text-gray-500
                            transition-all duration-200
                            hover:border-blue-200
                            hover:bg-blue-50
                            hover:text-blue-600
                          "
                        >
                          <FiEdit2 />
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => handleDelete(document)}
                          title="Delete"
                          className="
                            flex h-9 w-9 items-center justify-center
                            rounded-lg border border-gray-200
                            text-gray-500
                            transition-all duration-200
                            hover:border-red-200
                            hover:bg-red-50
                            hover:text-red-600
                          "
                        >
                          <FiTrash2 />
                        </button>

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
          <div className="min-h-screen bg-gray-50 p-6">
              {isOpen && (
                <div
                  onClick={() => openRightSidebar(false)}
                  className="
                    fixed inset-0 z-40
                    bg-black/40 backdrop-blur-[2px]
                  "
                />
              )}

              {/* Right Side Drawer */}
              <div
                className={`
                  fixed right-0 top-0 z-50
                  h-full w-full sm:w-[450px]
                  bg-white shadow-2xl
                  transition-transform duration-300 ease-in-out
                  ${openRightSidebar ? "translate-x-0" : "translate-x-full"}
                `}
              >

              
                <div className="
                  flex items-center justify-between
                  border-b border-gray-200
                  px-6 py-5
                ">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      Add Document
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      Upload a new document
                    </p>
                  </div>

                  <button
                    onClick={() => setOpenRightSidebar(false)}
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-lg bg-gray-100
                      text-gray-500
                      transition
                      hover:bg-red-50 hover:text-red-500
                    "
                  >
                    <FiX className="text-xl" />
                  </button>
                </div>

              
                <form className="flex h-[calc(100%-90px)] flex-col">

                
                  <div className="flex-1 space-y-5 overflow-y-auto p-6">

                 
                    <div>
                      <label className="
                        mb-2 block text-sm font-semibold text-gray-700
                      ">
                        Document Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter document name"
                        className="
                          w-full rounded-lg
                          border border-gray-300
                          px-4 py-3
                          text-sm text-gray-700
                          outline-none
                          transition
                          focus:border-blue-500
                          focus:ring-2 focus:ring-blue-500/20
                        "
                      />
                    </div>

                 
                    <div>
                      <label className="
                        mb-2 block text-sm font-semibold text-gray-700
                      ">
                        Category
                      </label>

                      <select
                        className="
                          w-full rounded-lg
                          border border-gray-300
                          bg-white
                          px-4 py-3
                          text-sm text-gray-700
                          outline-none
                          transition
                          focus:border-blue-500
                          focus:ring-2 focus:ring-blue-500/20
                        "
                      >
                        <option value="">Select Category</option>
                        <option value="report">Report</option>
                        <option value="guideline">Guideline</option>
                        <option value="document">Document</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Upload PDF */}
                    <div>
                      <label className="
                        mb-2 block text-sm font-semibold text-gray-700
                      ">
                        Upload PDF
                      </label>

                      <label className="
                        flex cursor-pointer flex-col
                        items-center justify-center
                        rounded-xl border-2 border-dashed
                        border-gray-300
                        bg-gray-50
                        px-5 py-10
                        text-center
                        transition
                        hover:border-blue-400
                        hover:bg-blue-50
                      ">
                        <FiUpload className="
                          mb-3 text-3xl text-blue-500
                        " />

                        <span className="text-sm font-semibold text-gray-700">
                          Click to upload PDF
                        </span>

                        <span className="mt-1 text-xs text-gray-400">
                          Maximum file size: 10 MB
                        </span>

                        <input
                          type="file"
                          accept=".pdf"
                          className="hidden"
                        />
                      </label>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="
                        mb-2 block text-sm font-semibold text-gray-700
                      ">
                        Description
                      </label>

                      <textarea
                        rows="4"
                        placeholder="Enter document description..."
                        className="
                          w-full resize-none rounded-lg
                          border border-gray-300
                          px-4 py-3
                          text-sm text-gray-700
                          outline-none
                          transition
                          focus:border-blue-500
                          focus:ring-2 focus:ring-blue-500/20
                        "
                      />
                    </div>

                  </div>

                  {/* Footer Buttons */}
                  <div className="
                    flex items-center justify-end gap-3
                    border-t border-gray-200
                    bg-white px-6 py-4
                  ">

                    <button
                      type="submit"
                      className="
                        rounded-lg bg-blue-600
                        px-5 py-2.5
                        text-sm font-semibold text-white
                        shadow-md shadow-blue-600/20
                        transition
                        hover:bg-blue-700
                      "
                    >
                      Update Document
                    </button>

                  </div>
                </form>
              </div>
            </div>
         </section>
        </main>
      </div>
   
    </>
  )
}

export default Guidelines