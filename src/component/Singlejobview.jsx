"use client";

import Navbar from "./Navbar";
import { useState, useRef, useEffect } from "react";
import t1 from "../image/t1.png";
import t2 from "../image/t2.png";
import t3 from "../image/t3.png";
import t4 from "../image/t4.png";
import p1 from "../image/Notificationlogo1.png";
import star from "../image/star.png";
import tick from "../image/tick.png";
import { Facebook, Linkedin, MoreVertical } from "lucide-react";

const Singlejobview = () => {
  const [expanded, setExpanded] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const menuRef = useRef(null);
  const [showJobDetails, setShowJobDetails] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [showCompanyPage, setShowCompanyPage] = useState(false);

  // Close the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowShareMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const description =
    "The right and contemporary use of technology is key to the progress of a nation. Keeping this in mind, Grameenphone always brings future-proof technology in order to facilitate your progress. The possibilities in this new world are immense and someone as bright as you should be the forerunner in leading the change...";

  // Share functions
  const shareOnWhatsApp = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      "Check out this job: Product Designer at Grameenphone"
    );
    window.open(`https://wa.me/?text=${text}%20${url}`, "_blank");
    setShowShareMenu(false);
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank"
    );
    setShowShareMenu(false);
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Product Designer");
    const summary = encodeURIComponent("Job opportunity at Grameenphone");
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary}`,
      "_blank"
    );
    setShowShareMenu(false);
  };

  const handleJobItemClick = () => {
    // Only toggle in mobile view
    if (window.innerWidth < 768) {
      setShowJobDetails(true);
      setShowCompanyPage(false);
    }
  };

  const handleBackToList = () => {
    setShowJobDetails(false);
    setShowCompanyPage(false);
  };

  const handleViewPageClick = (e) => {
    // For mobile view, show the company page in the same view
    if (window.innerWidth < 768) {
      e.preventDefault();
      setShowCompanyPage(true);
      setShowJobDetails(false);
    }
    // For desktop view, just let the link open in a new tab naturally
    // Don't prevent default behavior for desktop
  };

  return (
    <>
      <Navbar />
      <div className="bg-white rounded-lg overflow-hidden md:flex">
        {/* Left Side - Job Listings */}
        <div
          className={`w-full md:w-[22%] p-4 border-r-2 border-gray-200 ${
            showJobDetails || showCompanyPage ? "hidden md:block" : "block"
          }`}
        >
          <div className="text-xl font-semibold text-gray-700 mb-2 mx-6">
            Top job picks for you
          </div>
          <div className="text-xs text-gray-500 mx-6">
            Based on your search{" "}
            <span className="font-bold mx-2 md:mx-10">45 Results</span>
          </div>
          <div className="mt-4 p-2">
            {/* Sample Job Listing - Repeat this for each job */}
            <div
              className="flex items-center py-2 cursor-pointer hover:bg-blue-50"
              onClick={handleJobItemClick}
            >
              <img
                // Replace with actual logo
                src={t1 || "/placeholder.svg"}
                alt="Company Logo"
                className="w-10 h-10 rounded-xl mr-2"
              />
              <div>
                <div className="text-sm font-medium text-gray-800">
                  Product Designer
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-semibold text-black">Grameenphone</span>{" "}
                  Dhaka, Bangladesh
                </div>
                <div className="text-xs text-black font-semibold flex mt-2">
                  <img
                    src={tick || "/placeholder.svg"}
                    alt="tick"
                    className="mr-1 h-4 w-4"
                  />
                  Applied on 23 May 20
                </div>
              </div>
            </div>
            {/* End Sample Job Listing */}
            {/* Add more job listings here */}
            <div
              className="flex items-center py-2 cursor-pointer hover:bg-blue-50"
              onClick={handleJobItemClick}
            >
              <img
                // Replace with actual logo
                src={t2 || "/placeholder.svg"}
                alt="Company Logo"
                className="w-10 h-10 rounded-xl mr-2"
              />
              <div>
                <div className="text-sm font-medium text-gray-800">
                  Product Designer
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-semibold text-black">Grameenphone</span>{" "}
                  Dhaka, Bangladesh
                </div>
              </div>
            </div>
            <div
              className="flex items-center py-2 cursor-pointer hover:bg-blue-50"
              onClick={handleJobItemClick}
            >
              <img
                // Replace with actual logo
                src={t3 || "/placeholder.svg"}
                alt="Company Logo"
                className="w-10 h-10 rounded-xl mr-2"
              />
              <div>
                <div className="text-sm font-medium text-gray-800">
                  Product Designer
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-semibold text-black">Grameenphone</span>{" "}
                  Dhaka, Bangladesh
                </div>
              </div>
            </div>
            <div
              className="flex items-center py-2 cursor-pointer hover:bg-blue-50"
              onClick={handleJobItemClick}
            >
              <img
                // Replace with actual logo
                src={t4 || "/placeholder.svg"}
                alt="Company Logo"
                className="w-10 h-10 rounded-xl mr-2"
              />
              <div>
                <div className="text-sm font-medium text-gray-800">
                  Product Designer
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-semibold text-black">Grameenphone</span>{" "}
                  Dhaka, Bangladesh
                </div>
              </div>
            </div>
            <div
              className="flex items-center py-2 cursor-pointer hover:bg-blue-50"
              onClick={handleJobItemClick}
            >
              <img
                // Replace with actual logo
                src={t1 || "/placeholder.svg"}
                alt="Company Logo"
                className="w-10 h-10 rounded-xl mr-2"
              />
              <div>
                <div className="text-sm font-medium text-gray-800">
                  Product Designer
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-semibold text-black">Grameenphone</span>{" "}
                  Dhaka, Bangladesh
                </div>
              </div>
            </div>
            <div
              className="flex items-center py-2 cursor-pointer hover:bg-blue-50"
              onClick={handleJobItemClick}
            >
              <img
                // Replace with actual logo
                src={t2 || "/placeholder.svg"}
                alt="Company Logo"
                className="w-10 h-10 rounded-xl mr-2"
              />
              <div>
                <div className="text-sm font-medium text-gray-800">
                  Product Designer
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-semibold text-black">Grameenphone</span>{" "}
                  Dhaka, Bangladesh
                </div>
              </div>
            </div>
            <div
              className="flex items-center py-2 cursor-pointer hover:bg-blue-50"
              onClick={handleJobItemClick}
            >
              <img
                // Replace with actual logo
                src={t3 || "/placeholder.svg"}
                alt="Company Logo"
                className="w-10 h-10 rounded-xl mr-2"
              />
              <div>
                <div className="text-sm font-medium text-gray-800">
                  Product Designer
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-semibold text-black">Grameenphone</span>{" "}
                  Dhaka, Bangladesh
                </div>
                <div className="text-xs text-black flex mt-2 font-semibold">
                  <img
                    src={star || "/placeholder.svg"}
                    alt="star"
                    className="mr-1 h-4 w-4"
                  />
                  Interview
                </div>
              </div>
            </div>
            <div
              className="flex items-center py-2 cursor-pointer hover:bg-blue-50"
              onClick={handleJobItemClick}
            >
              <img
                // Replace with actual logo
                src={t4 || "/placeholder.svg"}
                alt="Company Logo"
                className="w-10 h-10 rounded-xl mr-2"
              />
              <div>
                <div className="text-sm font-medium text-gray-800">
                  Product Designer
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-semibold text-black">Grameenphone</span>{" "}
                  Dhaka, Bangladesh
                </div>
              </div>
            </div>
            <div
              className="flex items-center py-2 cursor-pointer hover:bg-blue-50"
              onClick={handleJobItemClick}
            >
              <img
                // Replace with actual logo
                src={t1 || "/placeholder.svg"}
                alt="Company Logo"
                className="w-10 h-10 rounded-xl mr-2"
              />
              <div>
                <div className="text-sm font-medium text-gray-800">
                  Product Designer
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-semibold text-black">Grameenphone</span>{" "}
                  Dhaka, Bangladesh
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side - Job Details */}
        <div
          className={`w-full md:w-3/4 p-6 ${
            showJobDetails && !showCompanyPage ? "block" : "hidden md:block"
          }`}
          style={{
            overflowY: "scroll",
            maxHeight: "100vh",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {/* Add back button for mobile view */}
          {showJobDetails && (
            <button
              className="md:hidden mb-4 flex items-center text-gray-600"
              onClick={handleBackToList}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to jobs
            </button>
          )}
          {/* Job Title and Location */}
          <div className="flex flex-col md:flex-row justify-between items-start ">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Product Designer
              </h2>
              <div className="text-gray-600">
                <span className="mr-1">
                  <img
                    src={t1 || "/placeholder.svg"}
                    className="w-4 h-4 inline mr-1"
                    alt="img"
                  />
                </span>
                <span className="font-semibold">Grameenphone</span> Dhaka,
                Bangladesh
              </div>
              <div className="text-xs text-gray-500 mt-1 font-semibold">
                Posted on 15 May 20 &nbsp; Expire on 30 May 20
              </div>
              <h2 className="font-bold mt-2">Salary:25000-30000 INR</h2>
              <div className="flex items-center">
                {/* <img src={tick || "/placeholder.svg"} alt="tick" className="mr-1 h-4 w-4" />
      <span className="text-sm">Applied on 23 May 20</span> */}
              </div>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              {!isApplied ? (
                <>
                  <button
                    className="bg-purple-500 text-white rounded-xl px-6 py-2 text-sm font-medium mr-2"
                    onClick={() => setIsApplied(true)}
                  >
                    Apply Now
                  </button>
                  <button
                    className="bg-black text-white rounded-xl px-5 py-2 text-sm font-medium"
                    onClick={() => setIsApplied(true)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <div className="flex items-center">
                  <img
                    src={tick || "/placeholder.svg"}
                    alt="tick"
                    className="mr-2 h-4 w-4"
                  />
                  <span className="text-sm font-semibold">
                    Applied on 23 May 20
                  </span>
                </div>
              )}
              <div className="relative ml-2" ref={menuRef}>
                <button
                  className="text-gray-500 p-1 rounded-full hover:bg-gray-100"
                  onClick={() => setShowShareMenu(!showShareMenu)}
                >
                  <MoreVertical className="w-5 h-5" />
                </button>

                {showShareMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                    <div className="py-1">
                      <button
                        onClick={shareOnWhatsApp}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 mr-3 text-green-500 fill-current"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Share on WhatsApp
                      </button>
                      <button
                        onClick={shareOnFacebook}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Facebook className="w-5 h-5 mr-3 text-blue-600" />
                        Share on Facebook
                      </button>
                      <button
                        onClick={shareOnLinkedIn}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Linkedin className="w-5 h-5 mr-3 text-blue-700" />
                        Share on LinkedIn
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* HR Manager Info */}
          <div className="flex items-center mt-8 border-2 rounded-xl p-2 ">
            <img
              // Replace with actual image
              src={p1 || "/placeholder.svg"}
              alt="HR Manager"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <div className="text-sm font-medium text-gray-800 ">
                Hamish Marsh
              </div>
              <div className="text-xs text-gray-500">
                HR Manager, Grameenphone
              </div>
            </div>
            {/* <button className="ml-auto text-purple-400 rounded-md px-4 py-2 text-sm font-bold">
      Send Message
    </button> */}
          </div>
          {/* Responsibilities */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Responsibilities
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              <li>
                Work on and execute design projects from start to finish while
                meeting creative and technical requirements.
              </li>
              <li>
                Collaborate closely with engineers, researchers, clinicians and
                product managers to iterate rapidly.
              </li>
              <li>
                Work on the entire project lifecycle, from wireframes to
                detailed specs across multiple UX platforms.
              </li>
              <li>
                Participate in regular design reviews and other team-wide design
                efforts; create and contribute to a great design team culture.
              </li>
              <li>
                Participate in user-experience research and usability studies.
              </li>
            </ul>
          </div>
          {/* Qualifications and Skills */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Qualifications and Skills
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              <li>
                BA/BS degree in Design, HCI, CS, or related field, or equivalent
                practical experience.
              </li>
              <li>
                3+ years of relevant UX Design experience in consumer products,
                medical devices or other relevant areas.
              </li>
              <li>Portfolio of UX design work.</li>
              <li>
                Proven ability to work across the design process, from
                developing strong conceptual foundations to refining the
                smallest details with high quality and attention to detail.
              </li>
            </ul>
          </div>
          {/* Preferred Qualifications and Skills */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Preferred Qualifications and Skills
            </h3>
            <ol className="list-decimal list-inside text-gray-600 text-sm">
              <li>
                Experience designing for health-related products (software
                and/or hardware).
              </li>
              <li>Experience designing for wearable devices.</li>
              <li>Experience with prototyping.</li>
              <li>
                Self-motivated and able to prioritize and manage workload and
                meet critical project milestones and deadlines.
              </li>
              <li>
                Excellent interpersonal, communication, negotiation and
                collaboration skills.
              </li>
            </ol>
          </div>
          {/* Company Info */}
          <div className="mt-6 border-2 rounded-2xl p-4 md:p-8 relative">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start md:items-center gap-2">
                <img
                  src={t1 || "/placeholder.svg"}
                  alt="Company Logo"
                  className="w-8 h-8 rounded-full mt-1 md:mt-0"
                />
                <div>
                  <div className="text-sm font-medium text-gray-800">
                    Grameenphone Ltd.
                  </div>
                  <div className="text-xs text-gray-500">
                    Telecommunications 6,424 employees{" "}
                    <span className="text-green-400 font-bold ">
                      Actively Hiring
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="##"
                className="text-purple-400 text-sm font-bold md:self-start"
                onClick={handleViewPageClick}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Page
              </a>
            </div>

            <div className="mt-3 md:mt-2">
              <p className="text-xs text-gray-600">
                {expanded ? description : description.substring(0, 150) + "..."}
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-purple-400 ml-1 inline-flex items-center"
                >
                  {expanded ? "see less" : "see more"}
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Company Page View (for mobile) */}
        <div
          className={`w-full md:w-3/4 p-6 ${
            showCompanyPage ? "block" : "hidden"
          }`}
          style={{
            overflowY: "scroll",
            maxHeight: "100vh",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {/* Back button for company page view */}
          <button
            className="mb-4 flex items-center text-gray-600"
            onClick={handleBackToList}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to jobs
          </button>

          {/* Company Page Content */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={t1 || "/placeholder.svg"}
              alt="Company Logo"
              className="w-16 h-16 rounded-xl"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Grameenphone Ltd.
              </h2>
              <div className="text-sm text-gray-600">
                Telecommunications | Dhaka, Bangladesh
              </div>
              <div className="text-xs text-gray-500 mt-1">
                <span className="text-green-500 font-semibold">
                  Actively Hiring
                </span>{" "}
                • 6,424 employees
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                About the Company
              </h3>
              <p className="text-sm text-gray-600">
                {description}
                <br />
                <br />
                Grameenphone is the leading telecommunications service provider
                in Bangladesh with more than 76 million subscribers. The company
                started its journey in March 1997 and has been at the forefront
                of technological innovation in the country's mobile
                telecommunications industry.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Open Positions
              </h3>
              <div className="grid gap-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="text-md font-medium text-gray-800">
                    Product Designer
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Dhaka, Bangladesh • Full-time
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Posted on 15 May 20 • 25,000-30,000 INR
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="text-md font-medium text-gray-800">
                    UX Researcher
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Dhaka, Bangladesh • Full-time
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Posted on 18 May 20 • 22,000-28,000 INR
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="text-md font-medium text-gray-800">
                    Frontend Developer
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Dhaka, Bangladesh • Full-time
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Posted on 20 May 20 • 30,000-40,000 INR
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Company Benefits
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Health Insurance
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Paid Time Off
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Flexible Hours
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Professional Development
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Contact Information
              </h3>
              <div className="text-sm text-gray-600">
                <p>Website: www.grameenphone.com</p>
                <p>Email: careers@grameenphone.com</p>
                <p>Phone: +880 2 9882990</p>
                <p>
                  Address: GP House, Bashundhara, Baridhara, Dhaka-1229,
                  Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singlejobview;
