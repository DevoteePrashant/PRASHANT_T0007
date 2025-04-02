"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, X } from "lucide-react"
import Dheader3 from "./Dheader3"

function FormJobseeker3() {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      companyName: "",
      jobTitle: "",
      industry: "",
      department: "",
      joiningDate: "",
      leaveDate: "",
      employmentType: "",
      salary: "",
      currentlyRunning: false
    }
  ])

  const handleChange = (id, e) => {
    const { name, value, type, checked } = e.target
    setExperiences(prevExperiences =>
      prevExperiences.map(exp =>
        exp.id === id
          ? { ...exp, [name]: type === "checkbox" ? checked : value }
          : exp
      )
    )
  }

  const handleAddMore = () => {
    const newId =
      experiences.length > 0
        ? Math.max(...experiences.map(exp => exp.id)) + 1
        : 1
    setExperiences([
      ...experiences,
      {
        id: newId,
        companyName: "",
        jobTitle: "",
        industry: "",
        department: "",
        joiningDate: "",
        leaveDate: "",
        employmentType: "",
        salary: "",
        currentlyRunning: false
      }
    ])
  }

  const handleRemoveExperience = id => {
    if (experiences.length > 1) {
      setExperiences(experiences.filter(exp => exp.id !== id))
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Form submitted:", experiences)
    // Handle form submission logic here
  }

  return (
    <>
      <Dheader3 />

      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-100 via-white to-purple-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-y8VIQbQhSCi7xcFqUiFvxXXwZtkvps.svg"
            alt="Background Pattern"
            className="w-full h-full object-cover opacity-30"
            width={1440}
            height={1024}
            priority
          />
        </div>

        {/* Content */}
        <div className="relative w-full container mx-auto px-6 py-20 text-center z-10">
          <div className="mx-auto w-full max-w-4xl">
            {/* Progress Steps */}
            <div className="flex justify-between mb-4 md:mb-6 px-2 md:px-8">
              <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%]"></div>
              <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            </div>

            {/* Form Container */}
            <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 max-h-[80vh] overflow-y-auto">
              {/* Header with back button */}
              <div className="flex items-center mb-4 md:mb-8">
                <button
                  type="button"
                  className="mr-3 md:mr-4 rounded-full border border-black p-0.5 md:p-1"
                  aria-label="Go back"
                >
                  <Link to="/FormJobseeker2">
                    <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                  </Link>
                </button>
                <h2 className="text-xl md:text-2xl font-bold">Experience</h2>
              </div>

              <form onSubmit={handleSubmit}>
                {experiences.map((experience, index) => (
                  <div
                    key={experience.id}
                    className="mb-8 pb-6 border-b border-gray-200 relative"
                  >
                    {experiences.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveExperience(experience.id)}
                        className="absolute top-0 right-0 text-gray-500 hover:text-red-500"
                        aria-label="Remove experience"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}

                    {experiences.length > 1 && (
                      <h3 className="text-left text-lg font-medium mb-4">
                        Experience {index + 1}
                      </h3>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-6">
                      {/* Company Name */}
                      <div>
                        <label
                          htmlFor={`companyName-${experience.id}`}
                          className="block text-left text-sm font-medium text-gray-700 mb-1"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id={`companyName-${experience.id}`}
                          name="companyName"
                          value={experience.companyName}
                          onChange={e => handleChange(experience.id, e)}
                          className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                        />
                      </div>

                      {/* Job Title */}
                      <div>
                        <label
                          htmlFor={`jobTitle-${experience.id}`}
                          className="block text-left text-sm font-medium text-gray-700 mb-1"
                        >
                          Job Title
                        </label>
                        <input
                          type="text"
                          id={`jobTitle-${experience.id}`}
                          name="jobTitle"
                          value={experience.jobTitle}
                          onChange={e => handleChange(experience.id, e)}
                          className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                        />
                      </div>

                      {/* Industry */}
                      <div>
                        <label
                          htmlFor={`industry-${experience.id}`}
                          className="block text-left text-sm font-medium text-gray-700 mb-1"
                        >
                          Industry
                        </label>
                        <input
                          type="text"
                          id={`industry-${experience.id}`}
                          name="industry"
                          value={experience.industry}
                          onChange={e => handleChange(experience.id, e)}
                          className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                        />
                      </div>

                      {/* Department */}
                      <div>
                        <label
                          htmlFor={`department-${experience.id}`}
                          className="block text-left text-sm font-medium text-gray-700 mb-1"
                        >
                          Department
                        </label>
                        <input
                          type="text"
                          id={`department-${experience.id}`}
                          name="department"
                          value={experience.department}
                          onChange={e => handleChange(experience.id, e)}
                          className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                        />
                      </div>

                      {/* Joining Date */}
                      <div>
                        <label
                          htmlFor={`joiningDate-${experience.id}`}
                          className="block text-left text-sm font-medium text-gray-700 mb-1"
                        >
                          Joining Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            id={`joiningDate-${experience.id}`}
                            name="joiningDate"
                            value={experience.joiningDate}
                            onChange={e => handleChange(experience.id, e)}
                            placeholder="DD/MM/YYYY"
                            className="w-full border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none text-base"
                          />
                        </div>
                      </div>

                      {/* Leave Date */}
                      <div>
                        <label
                          htmlFor={`leaveDate-${experience.id}`}
                          className="block text-left text-sm font-medium text-gray-700 mb-1"
                        >
                          Leave Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            id={`leaveDate-${experience.id}`}
                            name="leaveDate"
                            value={experience.leaveDate}
                            onChange={e => handleChange(experience.id, e)}
                            placeholder="DD/MM/YYYY"
                            disabled={experience.currentlyRunning}
                            className={`w-full border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none text-base ${
                              experience.currentlyRunning ? "opacity-50" : ""
                            }`}
                          />
                        </div>
                      </div>

                      {/* Employment Type */}
                      <div>
                        <label
                          htmlFor={`employmentType-${experience.id}`}
                          className="block text-left text-sm font-medium text-gray-700 mb-1"
                        >
                          Employment Type
                        </label>
                        <input
                          type="text"
                          id={`employmentType-${experience.id}`}
                          name="employmentType"
                          value={experience.employmentType}
                          onChange={e => handleChange(experience.id, e)}
                          className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                        />
                      </div>

                      {/* Salary */}
                      <div>
                        <label
                          htmlFor={`salary-${experience.id}`}
                          className="block text-left text-sm font-medium text-gray-700 mb-1"
                        >
                          Salary
                        </label>
                        <input
                          type="number"
                          id={`salary-${experience.id}`}
                          name="salary"
                          value={experience.salary}
                          onChange={e => handleChange(experience.id, e)}
                          className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                        />
                      </div>
                    </div>

                    {/* Currently Running Checkbox */}
                    <div className="flex flex-col md:flex-row justify-between items-start mt-6">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="currentlyRunning"
                          checked={experience.currentlyRunning}
                          onChange={e => handleChange(experience.id, e)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 h-4 w-4"
                        />
                        <span className="ml-2 text-sm font-bold text-black">
                          Currently running
                        </span>
                      </label>
                    </div>
                  </div>
                ))}

                {/* Bottom Buttons */}
                <div className="flex flex-wrap md:flex-row flex-col justify-end items-center gap-2 md:gap-4 mt-6">
                  <Link to="/FormJobseeker7">
                    <button
                      type="button"
                      className="text-gray-600 text-sm md:text-base font-medium hover:text-gray-800 mr-1"
                    >
                      Skip & Next
                    </button>
                  </Link>
                  <button
                    type="button"
                    onClick={handleAddMore}
                    className="text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium"
                    style={{ backgroundColor: "#FF9F7B" }}
                  >
                    Add More +
                  </button>
                  <Link to="/FormJobseeker7">
                    <button
                      type="submit"
                      className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium"
                    >
                      Save & Next
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none" />
      </section>
    </>
  )
}

export default FormJobseeker3
