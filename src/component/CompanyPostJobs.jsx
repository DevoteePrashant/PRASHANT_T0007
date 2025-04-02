"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown, ChevronUp, Plus, User, X } from "lucide-react"
import Dheader from "./Dheader"
import JobPostModal from "./JobPostModal"
import DashSidebar from "./DashSidebar"

function CompanyPostJobs() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isJobModalOpen, setIsJobModalOpen] = useState(false)
  const location = useLocation()
  const substrLocation = location.pathname.substring(1)

  // Edit states
  const [isEditingJobDetails, setIsEditingJobDetails] = useState(false)
  const [isEditingRecruiter, setIsEditingRecruiter] = useState(false)
  const [isEditingAllQualifications, setIsEditingAllQualifications] = useState(
    false
  )

  // Form states for editing
  const [editedJob, setEditedJob] = useState(null)
  const [editedRecruiter, setEditedRecruiter] = useState({
    name: "Nihar Gami",
    company: "Godhani Technology"
  })

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const openJobModal = () => {
    setIsJobModalOpen(true)
  }

  const closeJobModal = () => {
    setIsJobModalOpen(false)
  }

  const [isJobListOpen, setIsJobListOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState(0)

  const toggleJobList = () => {
    setIsJobListOpen(!isJobListOpen)
  }

  const selectJob = index => {
    setSelectedJob(index)
    setIsJobListOpen(false)

    // Reset all edit states when changing jobs
    setIsEditingJobDetails(false)
    setIsEditingRecruiter(false)
    setIsEditingAllQualifications(false)

    // Set the edited job data to the selected job
    setEditedJob({ ...jobs[index] })
  }

  // Initialize jobs data
  const [jobs, setJobs] = useState([
    {
      title: "Product Designer",
      company: "Grameenphone",
      location: "Dhaka, Bangladesh",
      postedDate: "15 May 20",
      expireDate: "30 May 20",
      totalApplications: 4561,
      salary: "25000-30000 INR",
      responsibilities: [
        "Work on and execute design projects from start to finish while meeting creative and technical requirements.",
        "Collaborate closely with engineers, researchers, clinicians and product managers to iterate rapidly.",
        "Work on the entire project lifecycle, from wireframes to detailed specs across multiple UX platforms.",
        "Participate in regular design reviews and other team-wide design efforts; create and contribute to a great design team culture.",
        "Participate in user-experience research and usability studies."
      ],
      qualifications: [
        "BA/BS degree in Design, HCI, CS, or related field, or equivalent practical experience.",
        "3+ years of relevant UX Design experience in consumer products, medical devices or other relevant areas.",
        "Portfolio of UX design work.",
        "Proven ability to work across the design process, from developing strong conceptual foundations to refining the smallest details with high quality and attention to detail."
      ],
      preferredQualifications: [
        "Experience designing for health-related products (software and/or hardware).",
        "Experience designing for wearable devices.",
        "Experience with prototyping.",
        "Self-motivated and able to prioritize and manage workload and meet critical project milestones and deadlines.",
        "Excellent interpersonal, communication, negotiation and collaboration skills."
      ]
    },
    {
      title: "Product Designer",
      company: "Grameenphone",
      location: "Dhaka, Bangladesh",
      postedDate: "15 May 20",
      expireDate: "30 May 20",
      totalApplications: 3250,
      salary: "25000-30000 INR",
      responsibilities: [
        "Work on and execute design projects from start to finish while meeting creative and technical requirements.",
        "Collaborate closely with engineers, researchers, clinicians and product managers to iterate rapidly."
      ],
      qualifications: [
        "BA/BS degree in Design, HCI, CS, or related field, or equivalent practical experience.",
        "3+ years of relevant UX Design experience in consumer products, medical devices or other relevant areas."
      ],
      preferredQualifications: [
        "Experience designing for health-related products (software and/or hardware).",
        "Experience designing for wearable devices."
      ]
    },
    {
      title: "Product Designer",
      company: "Grameenphone",
      location: "Dhaka, Bangladesh",
      postedDate: "15 May 20",
      expireDate: "30 May 20",
      totalApplications: 2180,
      salary: "25000-30000 INR",
      responsibilities: [
        "Work on and execute design projects from start to finish while meeting creative and technical requirements.",
        "Collaborate closely with engineers, researchers, clinicians and product managers to iterate rapidly."
      ],
      qualifications: [
        "BA/BS degree in Design, HCI, CS, or related field, or equivalent practical experience.",
        "3+ years of relevant UX Design experience in consumer products, medical devices or other relevant areas."
      ],
      preferredQualifications: [
        "Experience designing for health-related products (software and/or hardware).",
        "Experience designing for wearable devices."
      ]
    }
  ])

  // Initialize editedJob with the first job
  useState(() => {
    setEditedJob({ ...jobs[0] })
  }, [])

  const currentJob = jobs[selectedJob]

  // Handle job details edit
  const handleJobDetailsEdit = () => {
    setIsEditingJobDetails(true)
  }

  const saveJobDetails = () => {
    // Create a new jobs array with the updated job
    const updatedJobs = [...jobs]
    updatedJobs[selectedJob] = { ...editedJob }

    // Update the jobs state
    setJobs(updatedJobs)
    setIsEditingJobDetails(false)
  }

  const cancelJobDetailsEdit = () => {
    // Reset the edited job to the current job
    setEditedJob({ ...currentJob })
    setIsEditingJobDetails(false)
  }

  // Handle recruiter edit
  const handleRecruiterEdit = () => {
    setIsEditingRecruiter(true)
  }

  const saveRecruiterEdit = () => {
    setIsEditingRecruiter(false)
  }

  const cancelRecruiterEdit = () => {
    setEditedRecruiter({
      name: "Nihar Gami",
      company: "Godhani Technology"
    })
    setIsEditingRecruiter(false)
  }

  // Handle all qualifications edit
  const handleAllQualificationsEdit = () => {
    setIsEditingAllQualifications(true)
  }

  const saveAllQualificationsEdit = () => {
    // Create a new jobs array with the updated data
    const updatedJobs = [...jobs]
    updatedJobs[selectedJob] = { ...editedJob }

    // Update the jobs state
    setJobs(updatedJobs)
    setIsEditingAllQualifications(false)
  }

  const cancelAllQualificationsEdit = () => {
    // Reset the edited job to the current job
    setEditedJob({ ...currentJob })
    setIsEditingAllQualifications(false)
  }

  // Handle input changes for job details
  const handleJobDetailChange = e => {
    const { name, value } = e.target
    setEditedJob({
      ...editedJob,
      [name]: value
    })
  }

  // Handle input changes for recruiter
  const handleRecruiterChange = e => {
    const { name, value } = e.target
    setEditedRecruiter({
      ...editedRecruiter,
      [name]: value
    })
  }

  // Handle responsibility changes
  const handleResponsibilityChange = (index, value) => {
    const updatedResponsibilities = [...editedJob.responsibilities]
    updatedResponsibilities[index] = value

    setEditedJob({
      ...editedJob,
      responsibilities: updatedResponsibilities
    })
  }

  // Add a new responsibility
  const addResponsibility = () => {
    setEditedJob({
      ...editedJob,
      responsibilities: [...editedJob.responsibilities, ""]
    })
  }

  // Remove a responsibility
  const removeResponsibility = index => {
    const updatedResponsibilities = [...editedJob.responsibilities]
    updatedResponsibilities.splice(index, 1)

    setEditedJob({
      ...editedJob,
      responsibilities: updatedResponsibilities
    })
  }

  // Handle qualification changes
  const handleQualificationChange = (index, value) => {
    const updatedQualifications = [...editedJob.qualifications]
    updatedQualifications[index] = value

    setEditedJob({
      ...editedJob,
      qualifications: updatedQualifications
    })
  }

  // Add a new qualification
  const addQualification = () => {
    setEditedJob({
      ...editedJob,
      qualifications: [...editedJob.qualifications, ""]
    })
  }

  // Remove a qualification
  const removeQualification = index => {
    const updatedQualifications = [...editedJob.qualifications]
    updatedQualifications.splice(index, 1)

    setEditedJob({
      ...editedJob,
      qualifications: updatedQualifications
    })
  }

  // Handle preferred qualification changes
  const handlePreferredQualificationChange = (index, value) => {
    const updatedPreferredQualifications = [
      ...editedJob.preferredQualifications
    ]
    updatedPreferredQualifications[index] = value

    setEditedJob({
      ...editedJob,
      preferredQualifications: updatedPreferredQualifications
    })
  }

  // Add a new preferred qualification
  const addPreferredQualification = () => {
    setEditedJob({
      ...editedJob,
      preferredQualifications: [...editedJob.preferredQualifications, ""]
    })
  }

  // Remove a preferred qualification
  const removePreferredQualification = index => {
    const updatedPreferredQualifications = [
      ...editedJob.preferredQualifications
    ]
    updatedPreferredQualifications.splice(index, 1)

    setEditedJob({
      ...editedJob,
      preferredQualifications: updatedPreferredQualifications
    })
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <DashSidebar substrLocation={substrLocation} />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <Dheader />

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          {/* Mobile-First Sidebar (collapsible) */}
          <div className="lg:hidden bg-white border-b border-gray-200 p-3">
            <button
              onClick={openJobModal}
              className="w-full py-2 px-4 bg-white text-purple-500 border border-purple-500 rounded-xl flex items-center justify-center"
            >
              <span>Post New Job</span>
              <Plus className="h-4 w-4 ml-1" />
            </button>
          </div>

          {/* Mobile Job Selection */}
          <div className="lg:hidden bg-white border-b border-gray-200 p-3">
            {/* Mobile Job Selector */}
            <div className="">
              <button
                onClick={toggleJobList}
                className="w-full py-2 px-4 bg-violet-50 text-gray-900 rounded-md flex items-center justify-between"
              >
                <div>
                  <h3 className="font-bold text-left">{currentJob.title}</h3>
                  <p className="text-sm text-gray-500 text-left">
                    <span className="font-semibold">{currentJob.company}</span>
                    &nbsp;&nbsp; {currentJob.location}
                  </p>
                </div>
                {isJobListOpen ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>

              {/* Dropdown for job selection on mobile */}
              {isJobListOpen && (
                <div className="z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                  {jobs.map((job, index) => (
                    <button
                      key={index}
                      className={`w-full p-3 text-left hover:bg-gray-50 ${
                        selectedJob === index ? "bg-violet-50" : ""
                      }`}
                      onClick={() => selectJob(index)}
                    >
                      <h3 className="font-bold">{job.title}</h3>
                      <p className="text-sm text-gray-500">
                        <span className="font-semibold">{job.company}</span>
                        &nbsp;&nbsp; {job.location}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:flex">
            {/* Left Sidebar (desktop view) */}
            <div
              className="hidden lg:block w-full lg:w-1/4 bg-white border-r border-gray-200 p-4"
              style={{ overflowY: "auto", scrollbarWidth: "none" }}
            >
              <button
                onClick={openJobModal}
                className="w-full py-2 px-4 bg-white text-purple-500 border border-purple-500 rounded-xl mb-6 flex items-center justify-center"
              >
                <span>Post New Job</span>
                <Plus className="h-4 w-4 ml-1" />
              </button>
              {/* Job List */}
              <div className="space-y-4">
                {jobs.map((job, index) => (
                  <button
                    key={index}
                    className={`w-full p-3 rounded-md text-left ${
                      selectedJob === index
                        ? "bg-violet-50"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => selectJob(index)}
                  >
                    <h3 className="font-bold text-gray-900">{job.title}</h3>
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">{job.company}</span>
                      &nbsp;&nbsp; {job.location}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Job Details */}
            <div
              className="flex-1 p-4 lg:p-6 bg-white overflow-y-auto"
              style={{ height: "calc(100vh - 64px)", overflowY: "auto" }}
            >
              {/* Header Stats */}
              <div className="flex flex-col md:flex-row justify-between items-start mb-4 lg:mb-8 border-b border-gray-200 pb-2 lg:pb-4">
                <div>
                  <p className="text-gray-500 text-sm">Total Applications</p>
                  <h2 className="text-2xl lg:text-3xl font-bold">
                    {currentJob.totalApplications.toLocaleString()}
                  </h2>
                </div>
                <Link to="/CompanyApplications">
                  <button className="py-2 px-4 font-semibold bg-white text-purple-500 border border-purple-500 rounded-xl mt-2 md:mt-0">
                    View Applicants
                  </button>
                </Link>
              </div>

              {/* Job Title Section - Editable */}
              {isEditingJobDetails ? (
                <div className="mb-6 border border-gray-200 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Edit Job Details</h2>
                    <div className="flex space-x-2">
                      <button
                        onClick={saveJobDetails}
                        className="p-2 bg-purple-500 text-white rounded-md flex items-center"
                      >
                        {/* <Save className="h-4 w-4 mr-1" /> */}
                        Save
                      </button>
                      <button
                        onClick={cancelJobDetailsEdit}
                        className="p-2 bg-gray-200 text-gray-700 rounded-md flex items-center"
                      >
                        {/* <X className="h-4 w-4 mr-1" /> */}
                        Cancel
                      </button>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Job Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={editedJob.title}
                        onChange={handleJobDetailChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={editedJob.company}
                          onChange={handleJobDetailChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={editedJob.location}
                          onChange={handleJobDetailChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Posted Date
                        </label>
                        <input
                          type="text"
                          name="postedDate"
                          value={editedJob.postedDate}
                          onChange={handleJobDetailChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Expire Date
                        </label>
                        <input
                          type="text"
                          name="expireDate"
                          value={editedJob.expireDate}
                          onChange={handleJobDetailChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Salary
                      </label>
                      <input
                        type="text"
                        name="salary"
                        value={editedJob.salary}
                        onChange={handleJobDetailChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-2">
                  <h1 className="text-xl lg:text-2xl font-bold mb-1 lg:mb-0">
                    {currentJob.title}
                  </h1>

                  <div className="flex flex-col items-end">
                    {/* Edit Button */}
                    <button
                      onClick={handleJobDetailsEdit}
                      className="text-purple-500 font-medium mb-2 flex items-center"
                    >
                      {/* <Edit className="h-4 w-4 mr-1" /> */}
                      Edit
                    </button>

                    {/* Posted and Expire Dates */}
                    <span className="text-gray-500 text-sm text-right">
                      Posted on {currentJob.postedDate} · Expire on{" "}
                      {currentJob.expireDate}
                    </span>
                  </div>
                </div>
              )}

              {/* Company and Location */}
              {!isEditingJobDetails && (
                <div className="flex items-center mb-2">
                  <div className="bg-white p-1 rounded mr-2">
                    <div className="h-4 w-4 bg-blue-100 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-semibold">
                    {currentJob.company}
                  </span>
                  <span className="text-gray-500 ml-1">
                    {currentJob.location}
                  </span>
                </div>
              )}

              {/* Salary */}
              {!isEditingJobDetails && (
                <h2 className="font-bold mt-2 mb-4">
                  Salary: {currentJob.salary}
                </h2>
              )}

              {/* Applicant Card - Editable */}
              {isEditingRecruiter ? (
                <div className="border border-gray-200 rounded-xl p-3 lg:p-4 mb-4 lg:mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Edit Recruiter</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={saveRecruiterEdit}
                        className="p-1 bg-purple-500 text-white rounded-md flex items-center text-sm"
                      >
                        {/* <Check className="h-3 w-3 mr-1" /> */}
                        Save
                      </button>
                      <button
                        onClick={cancelRecruiterEdit}
                        className="p-1 bg-gray-200 text-gray-700 rounded-md flex items-center text-sm"
                      >
                        {/* <X className="h-3 w-3 mr-1" /> */}
                        Cancel
                      </button>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={editedRecruiter.name}
                        onChange={handleRecruiterChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={editedRecruiter.company}
                        onChange={handleRecruiterChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="border border-gray-200 rounded-xl p-3 lg:p-4 mb-4 lg:mb-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full mr-2 lg:mr-3 flex items-center justify-center bg-gray-100">
                        <User className="text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">{editedRecruiter.name}</h3>
                        <p className="text-sm text-gray-500">
                          {editedRecruiter.company}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleRecruiterEdit}
                      className="text-purple-500 font-bold flex items-center"
                    >
                      {/* <Edit className="h-4 w-4 mr-1" /> */}
                      Change
                    </button>
                  </div>
                </div>
              )}

              {/* Combined Sections with Single Edit Button */}
              <div className="mb-4 lg:mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-medium">Job Requirements</h2>
                  {!isEditingAllQualifications ? (
                    <button
                      onClick={handleAllQualificationsEdit}
                      className="text-purple-500 font-medium flex items-center"
                    >
                      Edit
                    </button>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={saveAllQualificationsEdit}
                        className="p-1 bg-purple-500 text-white rounded-md flex items-center text-sm"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelAllQualificationsEdit}
                        className="p-1 bg-gray-200 text-gray-700 rounded-md flex items-center text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                {isEditingAllQualifications ? (
                  <div className="border border-gray-200 rounded-xl p-3 mb-4">
                    <h3 className="font-medium mb-2">Responsibilities</h3>
                    {editedJob.responsibilities.map((item, index) => (
                      <div key={index} className="flex items-start mb-2">
                        <textarea
                          value={item}
                          onChange={e =>
                            handleResponsibilityChange(index, e.target.value)
                          }
                          className="flex-1 p-2 border border-gray-300 rounded-md"
                          rows={2}
                        />
                        <button
                          onClick={() => removeResponsibility(index)}
                          className="ml-2 p-2 bg-red-100 text-red-500 rounded-md"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={addResponsibility}
                      className="mt-2 p-2 bg-purple-100 text-purple-500 rounded-md flex items-center w-full justify-center mb-4"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Responsibility
                    </button>

                    <h3 className="font-medium mb-2">
                      Qualifications and Skills
                    </h3>
                    {editedJob.qualifications.map((item, index) => (
                      <div key={index} className="flex items-start mb-2">
                        <textarea
                          value={item}
                          onChange={e =>
                            handleQualificationChange(index, e.target.value)
                          }
                          className="flex-1 p-2 border border-gray-300 rounded-md"
                          rows={2}
                        />
                        <button
                          onClick={() => removeQualification(index)}
                          className="ml-2 p-2 bg-red-100 text-red-500 rounded-md"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={addQualification}
                      className="mt-2 p-2 bg-purple-100 text-purple-500 rounded-md flex items-center w-full justify-center mb-4"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Qualification
                    </button>

                    <h3 className="font-medium mb-2">
                      Preferred Qualifications and Skills
                    </h3>
                    {editedJob.preferredQualifications.map((item, index) => (
                      <div key={index} className="flex items-start mb-2">
                        <textarea
                          value={item}
                          onChange={e =>
                            handlePreferredQualificationChange(
                              index,
                              e.target.value
                            )
                          }
                          className="flex-1 p-2 border border-gray-300 rounded-md"
                          rows={2}
                        />
                        <button
                          onClick={() => removePreferredQualification(index)}
                          className="ml-2 p-2 bg-red-100 text-red-500 rounded-md"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={addPreferredQualification}
                      className="mt-2 p-2 bg-purple-100 text-purple-500 rounded-md flex items-center w-full justify-center"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Preferred Qualification
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Responsibilities</h3>
                      <ul className="list-disc pl-5 lg:pl-6 space-y-2 font-semibold">
                        {currentJob.responsibilities.map((item, index) => (
                          <li key={index} className="text-gray-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">
                        Qualifications and Skills
                      </h3>
                      <ul className="list-disc pl-5 lg:pl-6 space-y-2 font-semibold">
                        {currentJob.qualifications.map((item, index) => (
                          <li key={index} className="text-gray-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">
                        Preferred Qualifications and Skills
                      </h3>
                      <ol className="list-decimal pl-5 lg:pl-6 space-y-2 font-semibold">
                        {currentJob.preferredQualifications.map(
                          (item, index) => (
                            <li key={index} className="text-gray-700">
                              {item}
                            </li>
                          )
                        )}
                      </ol>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Post Modal */}
      <JobPostModal isOpen={isJobModalOpen} onClose={closeJobModal} />
    </div>
  )
}

export default CompanyPostJobs
