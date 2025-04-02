import { useState } from "react"
import logo2 from "../image/logo2.png"
import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import Dheader3 from "./Dheader3"

function FormJobseeker() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    location: "",
    gender: "",
    mobileNumber: "",
    dateOfBirth: "",
    pincode: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }
  return (
    <>
          <Dheader3/>

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
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            </div>

            {/* Form Container - Fixed height to match other forms */}
            <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 min-h-[450px] md:h-[520px] overflow-y-auto">
              <div className="mb-4 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-left">
                  Basic Information
                </h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className="h-[calc(100%-60px)] md:h-[calc(100%-80px)] flex flex-col"
              >
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-3 md:gap-y-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                      />
                    </div>

                    {/* Gender */}
                    <div>
                      <label
                        htmlFor="gender"
                        className="block  text-left  text-sm font-medium text-gray-700 mb-1"
                      >
                        Gender
                      </label>
                      <div className="relative">
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full appearance-none border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none bg-transparent text-base">
                          <option value="" disabled></option>
                          <option value="male" className="">Male</option>
                          <option value="female">Female</option>
                          <option value="prefer-not-to-say">
                            Prefer not to say
                          </option>
                        </select>
                        <ChevronDown className="absolute right-2 bottom-3 h-4 w-4 " />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="emailAddress"
                        className=" text-left  block text-sm text-left font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label
                        htmlFor="mobileNumber"
                        className=" text-left  block text-sm font-medium text-gray-700 mb-1"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-left   text-sm font-medium text-gray-700 mb-1"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                      />
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label
                        htmlFor="dateOfBirth"
                        className="block text-left   text-sm font-medium text-gray-700 mb-1"
                      >
                        Date of Birth
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          className="w-full border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none text-base"
                        />
                      </div>
                    </div>

                    {/* Pincode */}
                    <div>
                      <label
                        htmlFor="pincode"
                        className="block text-left   text-sm font-medium text-gray-700 mb-1"
                      >
                        Pincode
                      </label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        pattern="\d{6}"
                        maxLength={6}
                        required
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* Save & Next Button */}
                    <div className="flex flex-col md:flex-row justify-end items-center gap-2 md:gap-4 mt-8 md:mt-12">
                             <Link to="/FormJobseeker2">
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
          </div>{" "}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none" />
      </section>
    </>
  )
}

export default FormJobseeker
