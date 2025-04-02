

import { useState } from "react"

export const ItemModal = ({ item, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    item?.type === "industry"
      ? { id: item?.id || "", type: "industry", name: item?.name || "" }
      : {
          id: item?.id || "",
          type: "section",
          title: item?.title || "",
          content: item?.content || ""
        }
  )

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (typeof onSave === "function") {
      onSave(formData)
    } else {
      console.error("onSave is not a function")
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h3 className="text-xl font-medium mb-4">
          {item?.type === "industry" ? "Edit Industry" : "Edit Section"}
        </h3>

        <form onSubmit={handleSubmit}>
          {formData.type === "industry" ? (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Industry Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Section Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  rows={4}
                  required
                />
              </div>
            </>
          )}

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
