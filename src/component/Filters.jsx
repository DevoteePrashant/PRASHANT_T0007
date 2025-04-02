const Filters = () => {
  return (
    <aside className="w-full lg:w-[100%] xl:w-[100%]  bg-white p-4 sm:p-6 rounded-lg shadow-md overflow-hidden lg:mt-12  ">
      <h2 className="text-lg font-semibold mb-4 hidden lg:block">Filters</h2>

      {/* Location Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Location</h3>
        <ul className="space-y-2">
          {[
            "Near me",
            "Remote job",
            "Exact location",
            "Within 15 km",
            "Within 30 km",
            "Within 50 km",
          ].map((location, index) => (
            <li key={index}>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="location"
                  className="form-radio text-purple-500 focus:ring-purple-500"
                />
                <span className="text-l">{location}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Salary Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Salary</h3>
        <div className="flex space-x-0 mb-4 overflow-auto scrollbar-hide">
          {["Hourly", "Monthly", "Yearly"].map((type, index) => (
            <button
              key={index}
              className={`px-3 py-1 text-sm transition-colors duration-200 ease-in-out ${
                type === "Yearly"
                  ? "bg-blue-200 text-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-purple-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <ul className="space-y-2">
          {["Any", "> 30k", "> 50k", "> 80k", "> 100k"].map((salary, index) => (
            <li key={index}>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="salary"
                  className="form-radio text-purple-500 focus:ring-purple-500"
                />
                <span className="text-l">{salary}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Date of Posting */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Date of posting</h3>
        <ul className="space-y-2">
          {["All time", "Last 24 hours", "Last 3 days", "Last 7 days"].map(
            (date, index) => (
              <li key={index}>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="date"
                    className="form-radio text-purple-500 focus:ring-purple-500"
                  />
                  <span className="text-l">{date}</span>
                </label>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Work Experience */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Work experience</h3>
        <ul className="space-y-2">
          {["Any experience", "Internship", "Work remotely"].map(
            (experience, index) => (
              <li key={index}>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="experience"
                    className="form-radio text-purple-500 focus:ring-purple-500"
                  />
                  <span className="text-l">{experience}</span>
                </label>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Type of Employment */}
      <div>
        <h3 className="text-lg font-medium mb-2">Type of employment</h3>
        <ul className="space-y-2">
          {["Full-time", "Temporary", "Part-time"].map((employment, index) => (
            <li key={index}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={`employment-${index}`}
                  className="form-checkbox text-purple-500 focus:ring-purple-500"
                />
                <span className="text-l">{employment}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Filters;


