import React, { useState } from 'react'
import dashboard from "../image/dashboard.png";
import { RxDashboard } from "react-icons/rx";
import { PiBagSimpleFill } from "react-icons/pi";
import { PiMonitorFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import logo2 from "../image/logo2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const DashSidebar = ({substrLocation}) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    console.log(substrLocation);
    

    return (
        <>
            <button
                onClick={toggleMobileMenu}
                className="lg:hidden fixed top-4 left-4 z-50 text-gray-700 hover:text-gray-900"
            >
                {isMobileMenuOpen ? (
                    <AiOutlineClose className="z-20 " size={24} />
                ) : (
                    <GiHamburgerMenu className="z-20 " size={24} />
                )}
            </button>

            {/* Sidebar */}
            <div
                className={`
          w-64 flex-shrink-0 bg-white shadow-lg fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:block
        `}
            >
                {/* Sidebar Content */}
                <div className="flex items-center justify-center h-20">
                    <Link to="/"><img src={logo2} alt="JOBJOD" className="h-9" /></Link>
                </div>

                {/* Profile */}
                <div className="flex items-center p-4 space-x-4 m-auto">
                    <div className="relative">
                        <img
                            src={dashboard}
                            alt="User Avatar"
                            className="w-12 h-12 rounded-full"
                        />
                        <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                    <div>
                        <p className="text-gray-700 font-bold">Hello, Company</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 mt-6">
                    <ul>
                        <li className="mb-2">
                            <Link
                                to="/CompanyDashboard"
                                className={`${substrLocation==='CompanyDashboard'?'bg-gray-900 text-white hover:bg-gray-900 hover:text-white':'text-black bg-white'} flex items-center p-2 rounded-xl text-sm font-medium hover:text-black  bg-gray-800 hover:bg-gray-100 `}

                                
                            >
                                <RxDashboard className="mr-2" />{" "}
                                <span className="m-auto">Dashboard</span>
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link
                                to="/CompanyPostJobs"
                                className={`${substrLocation==='CompanyPostJobs'?'bg-gray-900 text-white hover:bg-gray-900 hover:text-white':'text-black bg-white'} flex items-center p-2 rounded-xl text-sm font-medium hover:text-black  bg-gray-800 hover:bg-gray-100 `}
                            >
                                <PiBagSimpleFill className="mr-2" />{" "}
                                <span className="m-auto">Jobs</span>
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link
                                to="/CompanyApplications"
                                className={`${substrLocation==='CompanyApplications'?'bg-gray-900 text-white hover:bg-gray-900 hover:text-white':'text-black bg-white'} flex items-center p-2 rounded-xl text-sm font-medium hover:text-black  bg-gray-800 hover:bg-gray-100 `}
                            >
                                <PiMonitorFill className="mr-2" />{" "}
                                <span className="m-auto">Applications</span>
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link
                                to="/CompanyProfile"
                                className={`${substrLocation==='CompanyProfile'?'bg-gray-900 text-white hover:bg-gray-900 hover:text-white':'text-black bg-white'} flex items-center p-2 rounded-xl text-sm font-medium hover:text-black  bg-gray-800 hover:bg-gray-100 `}
                            >
                                <FaUser className="mr-2" />{" "}
                                <span className="m-auto">Company Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="##"
                                className={`${substrLocation==='Setting'?'bg-gray-900 text-white hover:bg-gray-900 hover:text-white':'text-black bg-white'} flex items-center p-2 rounded-xl text-sm font-medium hover:text-black  bg-gray-800 hover:bg-gray-100 `}
                            >
                                <IoMdSettings className="mr-2" />{" "}
                                <span className="m-auto">Settings</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </>

    )
}

export default DashSidebar;