import { useState } from "react"
import { ChevronDown, ChevronLeft, X } from "lucide-react"
import { Link } from "react-router-dom"
import React, { useEffect, useRef } from 'react'
import logo2 from "../image/logo2.png";
import Dheader3 from "./Dheader3"
import SearchableDropdown from "./searchabledropdownupdated"

// import Header from "./Header"

export default function FormCompany2() {
  const [formData, setFormData] = useState({
    overview: "",
    vision: "",
    mission: ""
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  const handleSkip = () => {
    console.log("Skipped to next step")
    // Handle skip logic here
  }

  const industries = [
    "Software Development",
    "Data Science",
    "Product Design",
    "Digital Marketing",
    "Customer Service",
    "Sales & Business",
    "Healthcare & Medical",
    "Finance & Accounting",
    "Education & Training",
    "Engineering",
  ]

  
      const [industry, setIndustry] = useState("Software Development");
      const [selectedPersons, setSelectedPersons] = useState([]);
      const [searchTerm, setSearchTerm] = useState("");
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const dropdownRef = useRef(null);
    
      // Filter available persons based on search term
      const InterviewPersons = [
        { name: "Software Development" },
        { name: "Data Science" },
        { name: "Product Design" },
        { name: "Digital Marketing" },
        { name: "Customer Service" },
        { name: "Sales & Business" },
        { name: "Healthcare & Medical" },
        { name: "Finance & Accounting" },
        { name: "Education & Training" },
        { name: "Engineering" },
      ];

      const filteredPersons = InterviewPersons.filter(
        (person) =>
          !selectedPersons.some((p) => p.name === person.name) &&
          person.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      // Add a selected person
      const handleAddPerson = (person) => {
        setSelectedPersons([...selectedPersons, person]);
        setSearchTerm("");
        setIsDropdownOpen(false);
      };
    
      // Remove a selected person
      const handleRemovePerson = (index) => {
        setSelectedPersons(selectedPersons.filter((_, i) => i !== index));
      };
    
      // Close dropdown when clicking outside
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

  return (
    <>
      {/* <Header /> */}
      <Dheader3/>
      <div className="min-h-screen relative flex items-center justify-center p-4  bg-gradient-to-r from-purple-100 via-white to-purple-50">
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
        <div className="relative w-full max-w-4xl">
          {/* Progress Steps */}
          <div className="flex justify-between mb-4 md:mb-6 px-2 md:px-8">
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%]"></div>
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
          </div>

          {/* Form Container - Fixed height for desktop, auto height for mobile */}
          <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 min-h-[450px] md:h-[520px] md:overflow-y-auto">
            {/* Header with back button */}
            <div className="flex items-center mb-4 md:mb-8">
              <button
                type="button"
                className="mr-3 md:mr-4 rounded-full border border-gray-300 p-0.5 md:p-1"
                aria-label="Go back"
              >
                <Link to="/FormCompany">
                  <div>
                    <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                </Link>
              </button>

              <h2 className="text-xl md:text-2xl font-bold">Overview</h2>
            </div>

            <form onSubmit={handleSubmit}>
            <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
      Company industry
      </label>

      {/* Input and Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <div className="flex items-center border-b border-gray-300">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsDropdownOpen(true);
            }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full pb-2 focus:outline-none focus:border-purple-500"
            placeholder="Type to add   Company industry..."
          />
          <ChevronDown
            className="h-5 w-5 text-gray-400 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
        </div>

        {/* Dropdown with Suggestions */}
        {isDropdownOpen && filteredPersons.length > 0 && (
          <ul className="absolute w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg max-h-40 z-50 overflow-auto">
            {filteredPersons.map((person, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200 flex items-center gap-2"
                onClick={() => handleAddPerson(person)}
              >
                {person.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Display Selected Persons */}
      <div className="mt-2 flex flex-wrap gap-2">
        {selectedPersons.map((person, index) => (
          <span
            key={index}
            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full flex items-center border border-purple-300"
          >
            {person.name}
            <X
              className="h-4 w-4 text-purple-600 cursor-pointer ml-2"
              onClick={() => handleRemovePerson(index)}
            />
          </span>
        ))}
      </div>
    </div>
              {/* Overview */}
              <div className="mb-6 md:mb-8">
                   <label htmlFor="degree"className="block text-sm font-medium text-gray-700 mb-1">Overview</label>
                  <input type="text" id="overview"name="overview" className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-sm md:text-base"/>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6">
                {/* Vision */}
                <div>
                  <label
                    htmlFor="vision"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Vision
                  </label>
                  <textarea
                    id="vision"
                    name="vision"
                    value={formData.vision}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none resize-none"
                  />
                </div>

                {/* Mission */}
                <div>
                  <label
                    htmlFor="mission"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mission
                  </label>
                  <textarea
                    id="mission"
                    name="mission"
                    value={formData.mission}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex flex-col md:flex-row justify-end items-center gap-2 md:gap-4 mt-8 md:mt-12">
                <Link to="/FormCompany3">
                  <button
                    type="button"
                    onClick={handleSkip}
                    className="text-gray-600 text-sm md:text-base font-medium hover:text-gray-800"
                  >
                    Skip & Next
                  </button>
                </Link>
                <Link to="/FormCompany3">
                  <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium"
                  >
                    Save & Next
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
