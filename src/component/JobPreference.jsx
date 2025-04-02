"use client";
import { useState, useRef, useEffect } from "react";
import { Pencil, Trash2, X } from "lucide-react";

export default function JobPreference() {
  const [preferences, setPreferences] = useState({
    employmentType: {
      id: "employmentType",
      label: "Employment Type",
      value: "Full Time",
    },
    workplace: {
      id: "workplace",
      label: "Workplace",
      value: "Work from home",
    },
    location: {
      id: "location",
      label: "Location",
      value: "Varachha, Mota Varachha, Yogichowk",
    },
    shift: {
      id: "shift",
      label: "Shift",
      value: "Day Shift",
    },
  });

  const [editingPreference, setEditingPreference] = useState(null);
  const [tempValue, setTempValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Close modal with ESC key
  useEffect(() => {
    function handleEscKey(event) {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    }

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isModalOpen]);

  const handleEdit = (id) => {
    setEditingPreference(id);
    setTempValue(preferences[id].value);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (editingPreference) {
      setPreferences({
        ...preferences,
        [editingPreference]: {
          ...preferences[editingPreference],
          value: tempValue,
        },
      });
      setEditingPreference(null);
      setIsModalOpen(false);
    }
  };

  const handleDelete = (id) => {
    const updatedPreferences = { ...preferences };
    updatedPreferences[id] = {
      ...updatedPreferences[id],
      value: "",
    };
    setPreferences(updatedPreferences);
  };

  const getOptions = (id) => {
    switch (id) {
      case "employmentType":
        return [
          "Full Time",
          "Part Time",
          "Contract",
          "Freelance",
          "Internship",
        ];
      case "workplace":
        return ["Work from home", "On-site", "Hybrid"];
      case "shift":
        return ["Day Shift", "Night Shift", "Rotating Shift", "Flexible Hours"];
      default:
        return [];
    }
  };

  return (
    <div className="border rounded-xl border-gray-200 p-6 mt-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Job Preference</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.values(preferences).map((preference) => (
          <div
            key={preference.id}
            className="border rounded-xl border-gray-200 rounded-lg p-4 bg-white shadow-sm"
          >
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-500 mb-1">
                {preference.label}
              </label>
              <div className="flex justify-between items-center">
                <span className="text-gray-800">
                  {preference.value || "Not specified"}
                </span>
                <div className="flex space-x-1">
                  <button
                    className="h-8 w-8 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    onClick={() => handleDelete(preference.id)}
                    aria-label="Delete"
                  >
                    <Trash2 className="h-4 w-4 text-gray-500" />
                  </button>

                  <button
                    className="h-8 w-8 rounded-md bg-violet-100 hover:bg-violet-200 flex items-center justify-center transition-colors"
                    onClick={() => handleEdit(preference.id)}
                    aria-label="Edit"
                  >
                    <Pencil className="h-4 w-4 text-violet-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 overflow-hidden"
          >
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-lg font-medium">
                Edit{" "}
                {editingPreference ? preferences[editingPreference].label : ""}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4">
              {editingPreference &&
                (editingPreference === "employmentType" ||
                editingPreference === "workplace" ||
                editingPreference === "shift" ? (
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                  >
                    {getOptions(editingPreference).map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    placeholder={`Enter ${
                      editingPreference
                        ? preferences[editingPreference].label
                        : ""
                    }`}
                  />
                ))}
            </div>

            <div className="flex justify-end p-4 border-t">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 mr-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-white bg-violet-600 rounded-md hover:bg-violet-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
