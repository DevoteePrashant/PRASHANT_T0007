



import React, { useRef, useState } from "react";
import { X } from "lucide-react"
import dashboard from "../image/dashboard.png";
import { RxDashboard } from "react-icons/rx";
import { PiBagSimpleFill } from "react-icons/pi";
import { PiMonitorFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaTrophy } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import img2 from "../image/education.png";
import logo2 from "../image/logo2.png";
import Dheader from "./Dheader";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Trash2, Eye, Plus, Pencil, SquarePen } from "lucide-react";
import { FaEdit } from "react-icons/fa";
import img from "../image/dashboard.png";
import img3 from "../image/education.png";
import { BsLink45Deg } from "react-icons/bs";
import DashSidebar from "./DashSidebar";
import CompanyBasicInformation from "./CompanyBasicInformation";
import { Modal } from "./common/Modal";
import { SectionModal } from "./SectionModal";
import { RecognitionModal } from "./RecognitionModal";
// import { IndustryModal } from "./IndustryModal";
// import { CultureModal } from "./CultureModal";
import { ItemModal } from "./ItemModal" 
import LegalDocuments from "./LegalDocuments";
import { CultureModal } from "./CultureModal";

function CompanyProfile() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAddIndustryModal, setShowAddIndustryModal] = useState(false);
  const [showEditIndustryModal, setShowEditIndustryModal] = useState(false);
  const [showAddSectionModal, setShowAddSectionModal] = useState(false);
  const [showEditSectionModal, setShowEditSectionModal] = useState(false);
  const [showAddRecognitionModal, setShowAddRecognitionModal] = useState(false);
  const [showCultureModal, setShowAddCultureModal] = useState(false);
  const [showEditcultureModal, setShowEditcultureModal] = useState(false);
  const [showEditRecognitionModal, setShowEditRecognitionModal] =
    useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false)
  const [currentItem, setCurrentItem] = useState(null)
  const [industries, setIndustries] = useState([
    { id: "1", name: "Information Technology" },
    { id: "2", name: "Digital Marketing" },
  ]);
  const [sections, setSections] = useState([
    {
      id: "1",
      title: "Overview",
      content:
        "ShareTrip is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...",
    },
    {
      id: "2",
      title: "Vision",
      content:
        "ShareTrip is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...",
    },
    {
      id: "3",
      title: "Mission",
      content:
        "ShareTrip is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...",
    },
  ]);
  const closeModal = () => {
    setShowEditModal(false)
    setCurrentItem(null)
  }
  const [items, setItems] = useState([
    {
      id: "1",
      type: "industry",
      name: "Information Technology"
    },
    {
      id: "2",
      type: "industry",
      name: "Digital Marketing"
    },
    {
      id: "3",
      type: "section",
      title: "Overview",
      content:
        "ShareTrip is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users..."
    },
    {
      id: "4",
      type: "section",
      title: "Vision",
      content:
        "ShareTrip is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users..."
    },
    {
      id: "5",
      type: "section",
      title: "Mission",
      content:
        "ShareTrip is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users..."
    }
  ])
  const [recognitions, setRecognitions] = useState([
    {
      id: "1",
      title: "Amazon",
      subtitle: "E-commerce & Cloud Computing",
      period: "1994 - Present",
      description:
        "Amazon is a multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence. It is one of the Big Five American technology companies.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      id: "2",
      title: "Google",
      subtitle: "Search Engine & Technology",
      period: "1998 - Present",
      description:
        "Google LLC is a multinational technology company specializing in internet-related services and products, including online advertising technologies, search engine, cloud computing, software, and hardware.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      id: "3",
      title: "Microsoft",
      subtitle: "Software & Technology Solutions",
      period: "1975 - Present",
      description:
        "Microsoft Corporation is a leading technology company known for its software products like Windows, Microsoft Office Suite, and its Azure cloud platform. It also develops hardware and offers various business solutions.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      id: "4",
      title: "Apple",
      subtitle: "Consumer Electronics & Software",
      period: "1976 - Present",
      description:
        "Apple Inc. is a technology company that designs, manufactures, and sells consumer electronics, computer software, and online services. It is best known for products like the iPhone, iPad, Mac, and Apple Watch.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      id: "5",
      title: "Tesla",
      subtitle: "Electric Vehicles & Clean Energy",
      period: "2003 - Present",
      description:
        "Tesla, Inc. is an American automotive and clean energy company. It designs and manufactures electric vehicles, battery energy storage systems, solar panels, and related products and services.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    },
  ]);
  const [cultures, setCultures] = useState([
    {
      id: "1",
      title: "Company Environment",
      content:
        "ShareTrip is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...",
    },
    {
      id: "2",
      title: "Employee Benefits",
      content:
        "ShareTrip is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...",
    },
    {
      id: "3",
      title: "Career Development",
      content:
        "ShareTrip is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...",
    },
  ]);
  const [editingIndustry, setEditingIndustry] = useState(null);
  const [editingSection, setEditingSection] = useState(null);
  const [editingRecognition, setEditingRecognition] = useState(null);
  const [newIndustry, setNewIndustry] = useState("");
  const [newSection, setNewSection] = useState({
    id: "",
    title: "",
    content: "",
  });
  const [newRecognition, setNewRecognition] = useState({
    id: "",
    title: "",
    subtitle: "",
    period: "",
    description: "",
  });
  const [cultureSection, setCultureCurrentculture] = useState(null);
  const [currentIndustry, setCurrentIndustry] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [currentRecognition, setCurrentRecognition] = useState(null);
  const location = useLocation();
  const substrLocation = location.pathname.substring(1);
  console.log(cultureSection, "cultureSection");
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const saveItem = updatedItem => {
    setItems(
      items.map(item => (item.id === updatedItem.id ? updatedItem : item))
    )
    setShowEditModal(false)
    setCurrentItem(null)
  }
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const NavItem = ({ icon, text, active = false }) => (
    <li
      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
        active ? "bg-purple-50 text-purple-600" : "hover:bg-gray-50"
      }`}
    >
      {React.cloneElement(icon, {
        className: `w-5 h-5 ${active ? "text-purple-600" : "text-gray-500"}`,
      })}
      <span className={active ? "font-medium" : ""}>{text}</span>
    </li>
  );
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
    uploadFileToServer(e.target.files[0]);
  };

  const uploadFileToServer = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  const InfoItem = ({ label, value }) => (
    <div className="break-words">
      <label className="block text-sm text-gray-500 mb-1">{label}</label>
      <p className="font-medium text-base md:text-lg">{value}</p>
    </div>
  );

  // Industry functions
  const addIndustry = () => {
    if (newIndustry.trim()) {
      const newItem = {
        id: Date.now().toString(), // Generate a unique ID
        type: "industry",
        name: newIndustry.trim(),
      };
      setItems([...items, newItem]); // Add the new industry to the items array
      setNewIndustry(""); // Clear the input field
    }
  };

  const updateIndustry = (updatedIndustry) => {
    setIndustries((prev) =>
      prev.map((industry) =>
        industry.id === updatedIndustry.id ? updatedIndustry : industry
      )
    );
    setShowEditIndustryModal(false);
  };

  const deleteIndustry = (id) => {
    setIndustries(industries.filter((industry) => industry.id !== id));
  };

  // Section functions
  const addSection = (section) => {
    setSections([...sections, section]);
    setShowAddSectionModal(false);
  };

  const updateSection = (updatedSection) => {
    setSections(
      sections.map((section) =>
        section.id === updatedSection.id ? updatedSection : section
      )
    );
    setShowEditSectionModal(false);
  };

  const deleteSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  // Recognition functions
  const addRecognition = (recognition) => {
    setRecognitions((prev) => [recognition, ...prev]);
    setShowAddRecognitionModal(false);
  };

  const updateRecognition = (updatedRecognition) => {
    setRecognitions((prev) =>
      prev.map((recognition) =>
        recognition.id === updatedRecognition.id
          ? updatedRecognition
          : recognition
      )
    );
    setShowEditRecognitionModal(false);
  };

  const deleteRecognition = (id) => {
    setRecognitions(
      recognitions.filter((recognition) => recognition.id !== id)
    );
  };

  const addculture = (newculture) => {
    setCultures([...cultures, newculture]);
    setShowAddCultureModal(false);
  };

  const updateculture = (updatedculture) => {
    setCultures(
      cultures.map((culture) =>
        culture.id === updatedculture.id ? updatedculture : culture
      )
    );
    setShowEditcultureModal(false);
  };

  const deleteculture = (id) => {
    setCultures(cultures.filter((culture) => culture.id !== id));
  };

  const UserIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  const BriefcaseIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
    </svg>
  );

  const AwardIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
      <circle cx="12" cy="8" r="6"></circle>
    </svg>
  );

  const CrownIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
      <path d="M5 21h14"></path>
    </svg>
  );

  const FileTextIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
      <path d="M10 9H8"></path>
      <path d="M16 13H8"></path>
      <path d="M16 17H8"></path>
    </svg>
  );
  const [profileImage, setProfileImage] = useState(
    "/placeholder.svg?height=96&width=96"
  );
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // Create a URL for the selected image
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);

      // Here you would typically upload the file to your server
      // uploadImageToServer(file)
    }
  };
  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id))
  }

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault()
      addIndustry()
    }
  }
  const handleEditItem = item => {
    setCurrentItem(item)
    setShowEditModal(true)
  }
  return (
    <>
      <div className="flex h-screen bg-white">
        {/* Mobile Menu Button */}
        <DashSidebar substrLocation={substrLocation} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-auto">
          {/* Header */}
          <Dheader />
          {/* Main Content */}
          <div className="min-h-[24rem] sm:min-h-[32rem] overflow-auto md:overflow-visible md:min-h-[56rem] lg:w-[80%]  md:w-[80%] w-full mx-auto">
            <div className="relative bg-white overflow-hidden">
              <img
                alt="Profile Background"
                className="w-full h-auto object-cover object-center min-h-[12rem] sm:min-h-[16rem] md:min-h-[20rem] lg:min-h-[24rem] xl:min-h-[28rem] max-w-screen-lg mx-auto hidden md:block"
                src="/static/media/g.af47b1fe0a2396978832.png"
              />
            </div>
            <div className="relative">
              {/* Profile Image */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="relative order-1 sm:order-none">
                    <div
                      className="relative cursor-pointer group"
                      onClick={handleImageClick}
                    >
                      <img
                        alt="Profile pictures"
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg object-cover md:mt-4 transition-opacity group-hover:opacity-80"
                        src={profileImage || "/placeholder.svg"}
                      />
                      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all">
                        <span className="text-white opacity-0 group-hover:opacity-100">
                          Change
                        </span>
                      </div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <SquarePen className="w-5 h-5" />
                      </div>
                    </div>
                    {/* Hidden file input */}
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>

                  <div className="text-center sm:text-left mt-auto mb-auto order-last">
                    <h1 className="text-2xl font-semibold">Nihar Gami</h1>
                    <p className="text-gray-600">Godhani Technology</p>
                  </div>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2"></div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 sticky">
                <div className="w-full lg:w-[280px] lg:flex-shrink-0 ">
                  <div className="bg-white rounded-2xl shadow-sm border m-4 md:p-4">
                    <nav>
                      <ul className="space-y-2 font-semibold">
                        <NavItem
                          icon={<PiBagSimpleFill />}
                          text="Information"
                          active
                        />
                        <NavItem icon={<FaTrophy />} text="Recognition" />
                        <NavItem icon={<FaCrown />} text="Culture" />
                        <NavItem
                          icon={<IoDocumentTextOutline />}
                          text="Legal Information"
                        />
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* Basic Information */}
                <CompanyBasicInformation />
              </div>
              {/* Overview,mission,vision code  */}
              {/* <div className=" bg-white rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 lg:pl-20 xl:pl-80 justify-center "> 
             
              </div> */}
              <div className="rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 lg:pl-20 xl:pl-80 justify-center ">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                

<div className="flex flex-row justify-between items-center mb-4">
                  <h2 className="text-2xl font-medium text-gray-900">
                    Company Industry
                  </h2>
                </div>

                {/* Industry tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {items
                    .filter(item => item.type === "industry")
                    .map(item => (
                      <div
                        key={item.id}
                        className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full flex items-center"
                      >
                        <span>{item.name}</span>
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="ml-2 hover:bg-purple-200 rounded-full p-1"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                </div>

                {/* Add industry input */}
                <div className="flex gap-2 mt-4">
                <input
  type="text"
  value={newIndustry}
  onChange={(e) => setNewIndustry(e.target.value)}
  onKeyDown={handleKeyDown}
  placeholder="Add industry"
  className="border rounded-md px-3 py-2 flex-grow"
/>
<button
  onClick={addIndustry}
  className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50"
>
  Add
</button>
                </div>

                {/* Sections */}
                {items
                  .filter(item => item.type === "section")
                  .map((item, index, filteredItems) => (
                    <div key={item.id} className="mb-4 sm:mb-6 md:mb-8 mt-3">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                        <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2 sm:mb-0">
                          {item.title}
                        </h2>
                        <div className="flex gap-4 mt-2 sm:mt-0">
                          <button
                            onClick={() => deleteItem(item.id)}
                            className="text-sm sm:text-base text-gray-500 hover:text-gray-700 font-semibold"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => handleEditItem(item)}
                            className="text-sm sm:text-base text-purple-500 hover:text-purple-700 font-semibold"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 mb-2 text-justify">
                        {item.content}
                      </p>
                      <button className="text-sm sm:text-base text-purple-500 hover:text-purple-700">
                        See More
                      </button>
                      {index < filteredItems.length - 1 && (
                        <div className="border-b border-gray-200 mt-6 sm:mt-8"></div>
                      )}
                    </div>
                  ))}
                
                </div>
              </div>

              {/* Recognition Section */}
     
              <div className="rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 lg:pl-20 xl:pl-80 " id="ProfileHeader">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                  <div className="flex items-center justify-between mb-8 ">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12">
                        <img
                          src={img2}
                          alt="Recognition icon"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">Recognition</h2>
                        <p className="text-gray-600 text-sm ">
                          Add recognition to provide more information
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowAddRecognitionModal(true)}
                      className="px-6 py-2 font-semibold text-purple-600 bg-white border-2 border-purple-600 hover:bg-purple-100 rounded-xl"
                    >
                      Add
                    </button>
                  </div>
                  {/* Education Entries */}
                  <div className="space-y-6">
                    {/* California Institute of the Arts */}
                    {recognitions.map((recognition) => (
                      <div className="border-b pb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
                            {recognition.logo ? (
                              <img
                                src={recognition.logo || "/placeholder.svg"}
                                alt={recognition.title}
                                class="w-full h-full object-contain"
                              />
                            ) : (
                              <>
                                <span>
                                  cal
                                  <br />
                                  ARTS
                                </span>
                              </>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-lg font-bold">
                                  {recognition.title}
                                </h3>
                                <div className="flex flex-wrap gap-x-4 text-sm mt-1">
                                  <span>{recognition.subtitle}</span>
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                  {/* <span>Grade: A+</span> */}
                                  <span className="mx-2">•</span>
                                  <span>{recognition.period}</span>
                                </div>
                              </div>
                              <div className="flex gap-4">
                                <button
                                  onClick={() =>
                                    deleteRecognition(recognition.id)
                                  }
                                  className="text-gray-500 hover:text-gray-700 font-semibold "
                                >
                                  Delete
                                </button>
                                <button
                                  onClick={() => {
                                    setCurrentRecognition(recognition);
                                    setShowEditRecognitionModal(true);
                                  }}
                                  className="text-purple-500 hover:text-purple-700 font-semibold"
                                >
                                  Edit
                                </button>
                              </div>
                            </div>
                            <p className="mt-4 text-gray-700 text-justify">
                              {recognition.description}...{" "}
                              <span className="text-purple-500 cursor-pointer">
                                See More
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
              </div>

              {/* Culture section */}
              <div className="rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 lg:pl-20 xl:pl-80 ">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex justify-between items-center mb-8 mt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-md flex items-center justify-center relative">
                      <div className="absolute top-0 left-0 w-full h-2 bg-orange-400 rounded-t-md"></div>
                      <div className="text-yellow-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">Culture</h1>
                      <p className="text-gray-600">
                        Add company culture information
                      </p>
                    </div>
                  </div>
                 
                </div>
                

                {/* Company Environment Section */}
                {cultures.map((culture) => (
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">{culture.title}</h2>
                      <div className="flex gap-4">
                        <button
                          onClick={() => deleteculture(culture.id)}
                          className="text-gray-500 hover:text-gray-600 font-semibold"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => {
                            setCultureCurrentculture(culture);
                            setShowEditcultureModal(true);
                          }}
                          className="text-purple-500 hover:text-purple-700 font-semibold"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{culture.content}</p>
                    <button className="text-sm text-purple-600 mt-1">
                      See More
                    </button>
                    <div className="border-b border-gray-200 mt-6"></div>
                  </div>
                ))}
              </div>
              </div>
              {/* Legal information */}
              <div className="rounded-lg p-4 pt-[unset] sm:p-6 md:p-8 lg:p-10 xl:p-12 lg:pl-20 xl:pl-80 ">
                <LegalDocuments />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {showAddIndustryModal && (
        <IndustryModal
          onClose={() => setShowAddIndustryModal(false)}
          onSave={addIndustry}
        />
      )}

      {showEditIndustryModal && currentIndustry && (
        <IndustryModal
          industry={currentIndustry}
          onClose={() => setShowEditIndustryModal(false)}
          onSave={updateIndustry}
        />
      )} */}

      {showAddSectionModal && (
        <SectionModal
          onClose={() => setShowAddSectionModal(false)}
          onSave={addSection}
        />
      )}

      {showEditSectionModal && currentSection && (
        <SectionModal
          section={currentSection}
          onClose={() => setShowEditSectionModal(false)}
          onSave={updateSection}
        />
      )}

      {showAddRecognitionModal && (
        <RecognitionModal
          onClose={() => setShowAddRecognitionModal(false)}
          onSave={addRecognition}
        />
      )}

      {showEditRecognitionModal && currentRecognition && (
        <RecognitionModal
          recognition={currentRecognition}
          onClose={() => setShowEditRecognitionModal(false)}
          onSave={updateRecognition}
        />
      )}
      {showCultureModal && (
        <CultureModal
          onClose={() => setShowAddCultureModal(false)}
          onSave={addculture}
        />
      )}
      {showEditcultureModal && cultureSection && (
        <CultureModal
          culture={cultureSection}
          onClose={() => setShowEditcultureModal(false)}
          onSave={updateculture}
        />
      )}


       {/* Modals */}
      {showEditModal && (
        <ItemModal item={currentItem} onClose={closeModal} onSave={saveItem} />
      )}

      {showAddRecognitionModal && (
        <RecognitionModal
          onClose={() => setShowAddRecognitionModal(false)}
          onSave={addRecognition}
        />
      )}

      {showEditRecognitionModal && currentRecognition && (
        <RecognitionModal
          recognition={currentRecognition}
          onClose={() => setShowEditRecognitionModal(false)}
          onSave={updateRecognition}
        />
      )}
    </>
  );
}

export default CompanyProfile;