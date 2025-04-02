import { Search, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { IoFilter } from "react-icons/io5";

export default function JobCandidateListing() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Application");
  const options = [
    "Application",
    "Shortlisted",
    "Interview",
    "Hired",
    "Rejected",
  ];
  

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".dropdown-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle body class for preventing scroll if needed
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("dropdown-open");
    } else {
      document.body.classList.remove("dropdown-open");
    }

    return () => {
      document.body.classList.remove("dropdown-open");
    };
  }, [isOpen]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isJobModalOpen, setIsJobModalOpen] = useState(false)
  
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
  
  
  
    const selectJob = (index) => {
      setSelectedJob(index)
      setIsJobListOpen(false)
    }
  
  
    const jobs = [
      {
        title: "Product Designer",
        company: "Grameenphone",
        location: "Dhaka, Bangladesh",
        postedDate: "15 May 20",
        expireDate: "30 May 20",
        totalApplications: 4561,
        responsibilities: [
          "Work on and execute design projects from start to finish while meeting creative and technical requirements.",
          "Collaborate closely with engineers, researchers, clinicians and product managers to iterate rapidly.",
          "Work on the entire project lifecycle, from wireframes to detailed specs across multiple UX platforms.",
          "Participate in regular design reviews and other team-wide design efforts; create and contribute to a great design team culture.",
          "Participate in user-experience research and usability studies.",
        ],
        qualifications: [
          "BA/BS degree in Design, HCI, CS, or related field, or equivalent practical experience.",
          "3+ years of relevant UX Design experience in consumer products, medical devices or other relevant areas.",
          "Portfolio of UX design work.",
          "Proven ability to work across the design process, from developing strong conceptual foundations to refining the smallest details with high quality and attention to detail.",
        ],
        preferredQualifications: [
          "Experience designing for health-related products (software and/or hardware).",
          "Experience designing for wearable devices.",
          "Experience with prototyping.",
          "Self-motivated and able to prioritize and manage workload and meet critical project milestones and deadlines.",
          "Excellent interpersonal, communication, negotiation and collaboration skills.",
        ],
      },
      {
        title: "Product Designer",
        company: "Grameenphone",
        location: "Dhaka, Bangladesh",
        postedDate: "15 May 20",
        expireDate: "30 May 20",
        totalApplications: 3250,
        responsibilities: [
          "Work on and execute design projects from start to finish while meeting creative and technical requirements.",
          "Collaborate closely with engineers, researchers, clinicians and product managers to iterate rapidly.",
        ],
        qualifications: [
          "BA/BS degree in Design, HCI, CS, or related field, or equivalent practical experience.",
          "3+ years of relevant UX Design experience in consumer products, medical devices or other relevant areas.",
        ],
        preferredQualifications: [
          "Experience designing for health-related products (software and/or hardware).",
          "Experience designing for wearable devices.",
        ],
      },
      {
        title: "Product Designer",
        company: "Grameenphone",
        location: "Dhaka, Bangladesh",
        postedDate: "15 May 20",
        expireDate: "30 May 20",
        totalApplications: 2180,
        responsibilities: [
          "Work on and execute design projects from start to finish while meeting creative and technical requirements.",
          "Collaborate closely with engineers, researchers, clinicians and product managers to iterate rapidly.",
        ],
        qualifications: [
          "BA/BS degree in Design, HCI, CS, or related field, or equivalent practical experience.",
          "3+ years of relevant UX Design experience in consumer products, medical devices or other relevant areas.",
        ],
        preferredQualifications: [
          "Experience designing for health-related products (software and/or hardware).",
          "Experience designing for wearable devices.",
        ],
      },
    ]
  
    const currentJob = jobs[selectedJob]

  return (
    <>
    <div className="flex flex-col lg:flex-row h-screen bg-white overflow-hidden">
      {/* Left Sidebar */}
      <div className="hidden lg:block w-full lg:w-1/4 bg-white border-r border-gray-200 p-4">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="search job name..."
            className="pl-10 w-full bg-gray-50 border rounded-full py-2 text-sm"
          />
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobListings.map((job, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-violet-50 cursor-pointer hover:bg-violet-100 transition-colors"
            >
              <h3 className="font-medium">{job.title}</h3>
              <div className="text-sm text-muted-foreground mt-1">
                <p>{job.company}</p>
                <p>{job.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-3 md:p-6 overflow-y-auto">
        {/* Mobile Header with Search and Filter */}
        {/* <div className="lg:hidden flex items-center gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="search job name..."
              className="pl-10 w-full bg-gray-50 border rounded-full py-2 text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 bg-white text-sm font-medium whitespace-nowrap">
            <IoFilter className="h-4 w-8" />
            <span className="hidden sm:inline">Filter by</span>
            <ChevronDown className="h-4 w-8" />
          </button>
        </div> */}
           <div className="lg:hidden bg-white border-b border-gray-200 mb-2">
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
                    <div className=" z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
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

        {/* Desktop Filter */}
        <div className="hidden lg:flex justify-end mb-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 bg-white text-sm font-medium">
            <IoFilter className="h-4 w-4" />
            <span className="w-20">Filter by</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        {/* Candidate Cards */}
        <div className="space-y-4">
          <div
            key={1}
            className="shadow-sm overflow-hidden bg-violet-50 rounded-md border border-gray-100"
          >
            <div className="p-3 md:p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold ">John Doe</h2>
                  <div className="flex items-center gap-1 mt-1">
                    <p className="font-medium">Software Engineer</p>
                    <span className="text-muted-foreground">(5 years)</span>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-medium">Skills:</p>
                    <p className="text-sm text-muted-foreground">
                      JavaScript, React, Node.js
                    </p>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-medium">
                      Available to join from:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      March 15, 2025
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="mt-6">
                    <h3 className="font-semibold mb-3">
                      Contact Information
                    </h3>
                    <div className="flex flex-col font-semibold gap-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span>1234567890</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span>johndoe@example.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:text-right">
                  <p className="text-sm text-muted-foreground mb-4">
                    Application: March 10, 2025
                  </p>

                  <div className="space-y-2 w-full md:w-auto">
                    <div className="dropdown-container relative z-10">

                      {/* {isOpen && ( */}
                        <select className="w-full md:w-48 flex  items-center justify-center rounded-full bg-gray-200 text-gray-800 py-2 px-4 font-medium hover:bg-gray-300 transition-colors">
                          {options.map((option) => (
                            <option
                              key={option}
                              className={`justify-start text-center px-4 py-3 text-sm hover:bg-gray-50 cursor-pointer transition-colors ${
                                selectedOption === option
                                  ? "font-medium text-gray-800"
                                  : ""
                              }`}
                              onClick={() => {
                                setSelectedOption(option);
                                setIsOpen(false); // Close dropdown after selecting an option
                              }}
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                      {/* )} */}
                    </div>

               

                    <button className="w-full md:w-48 sm:w-48 justify-center rounded-full bg-violet-400 py-2 px-4 font-medium text-gray-800 hover:bg-violet-500">
                      Profile
                    </button>
                    <br />

                    <button className="w-full md:w-48 sm:w-48 justify-center rounded-full bg-black text-white py-2 px-4 font-medium hover:bg-gray-800">
                      Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            key={2}
            className="shadow-sm overflow-hidden bg-violet-50 rounded-md border border-gray-100"
          >
            <div className="p-3 md:p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold ">Jane Doe</h2>
                  <div className="flex items-center gap-1 mt-1">
                    <p className="font-medium">Data Scientist</p>
                    <span className="text-muted-foreground">(3 years)</span>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-medium">Skills:</p>
                    <p className="text-sm text-muted-foreground">
                      Python, TensorFlow, Keras
                    </p>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-medium">
                      Available to join from:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      April 1, 2025
                    </p>
                  </div>
                </div>

                <div className="md:text-right">
                  <p className="text-sm text-muted-foreground mb-4">
                    Application: March 12, 2025
                  </p>

                  <div className="space-y-2 w-full md:w-auto">
                    <button className="w-full md:min-w-[150px] justify-center rounded-full bg-violet-400 py-2 px-4 font-medium text-gray-800 hover:bg-violet-500">
                      Unlock Candidate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            key={3}
            className="shadow-sm overflow-hidden bg-violet-50 rounded-md border border-gray-100"
          >
            <div className="p-3 md:p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1 ">
                  <h2 className="text-xl font-semibold filter blur-sm ">Bob Smith</h2>
                  <div className="flex items-center gap-1 mt-1">
                    <p className="font-medium">UX Designer</p>
                    <span className="text-muted-foreground">(2 years)</span>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-medium">Skills:</p>
                    <p className="text-sm text-muted-foreground">
                      Figma, Sketch, Adobe XD
                    </p>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-medium">
                      Available to join from:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      March 20, 2025
                    </p>
                  </div>
                </div>

                <div className="md:text-right">
                  <p className="text-sm text-muted-foreground mb-4">
                    Application: March 11, 2025
                  </p>

                  <div className="space-y-2 w-full md:w-auto">
                    <button className="w-full md:min-w-[150px] justify-center rounded-full bg-violet-400 py-2 px-4 font-medium text-gray-800 hover:bg-violet-500">
                      Unlock Candidate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          

  </div>
</div>

      </div>
    </div>
    </>
  );
}

// Sample data
const jobListings = [
  {
    title: "Product Designer",
    company: "Grameenphone",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Sales Manager",
    company: "Grameenphone",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Product Designer",
    company: "Grameenphone",
    location: "Dhaka, Bangladesh",
  },
];

const candidates = [
  {
    name: "John Doe",
    role: "Web Developer",
    experience: "2 Year 6 Month Experience",
    skills: "Javascript, React, MongoDB",
    availability: "01/April/2025",
    applicationTime: "12:45:00 22/02/2025",
    phone: "+91 12345 67890",
    email: "demo@gmail.com",
  },
  {
    name: "John Doe",
    role: "Web Developer",
    experience: "2 Year 6 Month Experience",
    skills: "Javascript, React, MongoDB",
    availability: "01/April/2025",
    applicationTime: "12:45:00 22/02/2025",
    phone: "+91 12345 67890",
    email: "demo@gmail.com",
  },
  {
    name: "John Doe",
    role: "Web Developer",
    experience: "2 Year 6 Month Experience",
    skills: "Javascript, React, MongoDB",
    availability: "01/April/2025",
    applicationTime: "12:45:00 22/02/2025",
    phone: "+91 12345 67890",
    email: "demo@gmail.com",
  },
];
