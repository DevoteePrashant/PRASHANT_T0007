"use client";

import { useState } from "react";
import Filters from "./Filters";
import JobList from "./JobList";
import { MapPin, Search, X, SlidersHorizontal } from "lucide-react";
import RightSidebar from "./RightSidebar";
import Navbar from "./Navbar";
import Group from "../image/Group.svg";
import Footer from "./Footer";

const JobListingPage = ({ isBrowseCompany }) => {
  // Job data
  const jobs = [
    {
      id: 1,
      company: {
        name: "Linear Company",
        logo: "/placeholder.svg?height=40&width=40",
      },
      title: "Software Engineer",
      location: "Brussels",
      type: "Full time",
      salary: "50-55k",
      postedAt: "29 min ago",
      isNew: true,
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt.",
    },
    {
      id: 2,
      company: {
        name: "Notion",
        logo: "/placeholder.svg?height=40&width=40",
      },
      title: "Junior UI Designer",
      location: "Madrid",
      type: "Part time",
      salary: "30-32k",
      postedAt: "1 day ago",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more job listings as needed
  ];

  // Filters state
  const [filters, setFilters] = useState({
    location: "",
    salary: "",
    salaryType: "Yearly",
    datePosted: "",
    experience: "",
    employmentType: [],
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const toggleFilterSidebar = () => {
    setShowFilterSidebar(!showFilterSidebar);
    // When opening the sidebar on mobile, we want to prevent scrolling
    if (!showFilterSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Searching for:", { jobType, location });
  };

  const handleImageError = (event) => {
    event.target.src = "/placeholder.svg"; // Fallback image
  };

  return (
    <>
      <div className="min-h-screen relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <img
            src={Group || "/placeholder.svg"}
            alt="Background Pattern"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <Navbar />
        <div className="w-full max-w-[1800px] mx-auto py-1 px-4 sm:px-10 lg:px-20">
          <div className="mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Find your{" "}
              <span className="text-purple-500">
                {isBrowseCompany ? "desired job" : "new job"}
              </span>{" "}
              today
            </h1>
            <p className="text-gray-700 mb-8">
              Thousands of jobs in the computer, engineering, and technology
              sectors are waiting for you.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row overflow-hidden">
                {/* Job Type Input */}
                <div className="flex items-center flex-1 bg-white p-4 border border-gray-200 rounded-md mb-3 sm:mb-0 sm:rounded-l-full sm:border-r-0">
                  <Search className="text-gray-400 w-5 h-5 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Information Technology"
                    className="w-full bg-white focus:outline-none text-gray-700 ml-3"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                  />
                </div>

                {/* Location Input */}
                <div className="flex items-center flex-1 bg-white border border-gray-200 rounded-md mb-3 sm:mb-0 sm:rounded-none p-4">
                  <MapPin className="text-gray-400 w-5 h-5 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="City, state or zip"
                    className="w-full bg-white focus:outline-none text-gray-700 ml-3"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                {/* Find Jobs Button */}
                <button
                  type="submit"
                  className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-4 px-6 transition-colors duration-200 rounded-md w-full sm:w-auto sm:rounded-r-full"
                >
                  Find Jobs
                </button>
              </div>
            </form>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mt-6 mb-4">
            <button
              onClick={toggleFilterSidebar}
              className="flex items-center justify-center w-full bg-white border border-gray-200 rounded-md py-3 px-4 text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Desktop Filters - visible only on large screens */}
            <div className="hidden lg:block w-[25%]">
              <Filters filters={filters} setFilters={setFilters} />
            </div>

            {/* Mobile Filter Sidebar */}
            {showFilterSidebar && (
              <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
                <div className="absolute right-0 top-0 h-full w-[85%] max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
                  <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-lg font-semibold ">Filters</h2>
                    <button
                      onClick={toggleFilterSidebar}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
                    <Filters filters={filters} setFilters={setFilters} />
                  </div>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <button
                      onClick={toggleFilterSidebar}
                      className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            )}

            <JobList jobs={jobs} isBrowseCompany={isBrowseCompany} />
            <RightSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobListingPage;
