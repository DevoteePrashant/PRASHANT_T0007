import React, { useRef, useState } from "react";
import logo2 from "../image/logo2.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Dheader3 from "./Dheader3";
import SearchableDropdown from "./searchabledropdownupdated"
import { ChevronDown, X } from "lucide-react";

export default function FormCompany({skillOptions }) {
  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState([]); // Stores selected skills
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [selectedPersons, setSelectedPersons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


    

  const InterviewPersons = [
    { name: "John Doe"  },
    { name: "Jane Smith"  },
    { name: "Michael Johnson" },
    { name: "Emily Davis"  },
    { name: "David Wilson"  },
    { name: "Sarah Brown"  },
    { name: "James Anderson" },
    { name: "Jessica Martinez"  },
    { name: "Robert Taylor"  },
    { name: "Laura Thomas"  },
    { name: "Daniel White"  },
  ];


  
  const CompanyNames = [
    "Tech Innovations Ltd.",
    "Global Solutions Inc.",
    "Pioneer Software",
    "NextGen Technologies",
    "Elite Web Services",
    "Future Vision Corp.",
    "Summit IT Solutions",
    "Infinity Systems",
    "Skyline Enterprises",
    "Blue Ocean Technologies",
    "Vertex Solutions"
  ];
  


  

  
    // Filter options based on input
    const filteredPersons = InterviewPersons.filter(
      (person) =>
        !selectedPersons.some((p) => p.name === person.name) &&
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Add selected person
    const handleAddPerson = (person) => {
      setSelectedPersons([...selectedPersons, person]);
      setSearchTerm("");
      setIsDropdownOpen(false);
    };
  
    // Remove person
    const handleRemovePerson = (index) => {
      setSelectedPersons(selectedPersons.filter((_, i) => i !== index));
    };


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    pincode: "",
    location: "",
    gender: "",
    mobileNumber: "",
    dateOfBirth: "",
    yearEstablished:" ",
  });

  
    const [industry, setIndustry] = useState("Software Development");
    const [Interview, setInterview] = useState("John Doe");
    const [CompanyName, setCompanyNames] = useState("Tech Innovations Ltd.");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };
  return (
    <>
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
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
          </div>

          {/* Form Container - Fixed height for desktop, auto height for mobile */}
          <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 min-h-[450px] md:h-[520px] md:overflow-y-auto">
            <div className="mb-4 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold">
                Basic Information
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="h-[calc(100%-60px)] md:h-[calc(100%-80px)] flex flex-col"
            >
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6">
                  {/* Company Name */}
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                    />
                       {/* <SearchableDropdown
          label="company Name"
          placeholder="company Name"
          options={CompanyNames}
          value={CompanyName}
          onChange={setCompanyNames}
          allowAddNew={true}
          allowDirectEdit={true}
        /> */}
                  </div>

                  {/* Interview Person's Name */}
                    {/* Interview Person Name */}
                               <div>
                               <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Select Interview Persons
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
            placeholder="Type to add interview persons..."
          />
          <ChevronDown className="h-5 w-5 text-gray-400 cursor-pointer" />
        </div>

        {/* Dropdown with Suggestions */}
        {isDropdownOpen && filteredPersons.length > 0 && (
          <ul className="absolute w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg max-h-40 z-100 overflow-auto">
            {filteredPersons.map((person, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200 flex items-center  z-100 gap-2"
                onClick={() => handleAddPerson(person)}
              >
               
                {person.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Display Selected Persons */}
      <div className="mt-2 flex flex-wrap  z-100 gap-2">
        {selectedPersons.map((person, index) => (
          <span
            key={index}
            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full flex items-center  z-100 gap-2 border border-purple-300"
          >
           
            {person.name}
            <X
              className="h-4 w-4 text-purple-600 cursor-pointer"
              onClick={() => handleRemovePerson(index)}
            />
          </span>
        ))}
      </div>
    </div>
                               </div>
                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="emailAddress"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label
                      htmlFor="mobileNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location2}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Year Established */}
                  <div>
                    <label
                      htmlFor="yearEstablished"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Year Established
                    </label>
                    <div className="relative">
                    <input
  type="text"
  id="yearEstablished"
  name="yearEstablished"
  value={formData.yearEstablished} // Ensure it's never undefined
  onChange={(e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits

    // Allow empty input
    if (value === '') {
      setFormData((prev) => ({ ...prev, yearEstablished: '' }));
      return;
    }

    // Allow input up to 4 digits
    if (value.length > 4) return;

    // Update state immediately for partial values
    setFormData((prev) => ({ ...prev, yearEstablished: value }));
  }}
  placeholder="yyyy"
  maxLength="4"
  className="w-full border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none"
/>


                    </div>
                    {/* <div className={`w-full max-w-md ${className || ""}`}>
      <div className="relative">
        <Popover>
          <div className="group flex flex-col">
            <div className="mb-1 text-sm font-normal text-gray-700">Date of Birth</div>
            <div className="flex items-center justify-between border-b border-gray-300 pb-1 focus-within:border-black">
              <PopoverTrigger asChild>
                <button
                  variant="ghost"
                  className={`h-9 w-full justify-start rounded-none p-0 text-left font-normal text-gray-700 hover:bg-transparent focus:ring-0 ${!date ? "text-gray-500" : ""}`}
                >
                  {date ? format(date, "PPP") : "Select date"}
                </button>
              </PopoverTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>
    </div> */}
                  </div>

                  {/* Website */}
                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  {/* Pincode */}
                  <div>
                    <label
                      htmlFor="pincode"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Pincode
                    </label>
                    <input
  type="text"
  id="pincode"
  name="pincode"
  value={formData.pincode}
  onChange={(e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digits

    // Allow empty input
    if (value === "") {
      setFormData((prev) => ({ ...prev, pincode: "" }));
      return;
    }

    // Restrict to 6 digits (typical pincode length)
    if (value.length > 6) return;

    // Update state
    setFormData((prev) => ({ ...prev, pincode: value }));
  }}
  className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
/>


                    
                  </div>
                </div>
              </div>

              {/* Save & Next Button */}
              <div className="flex flex-col md:flex-row justify-end items-center gap-2 md:gap-4 mb-3 mt-4 md:mb-12 mt:mb-12">
                <Link to="/FormCompany2">
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
  );
}
