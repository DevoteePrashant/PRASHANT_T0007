"use client"

import { useState } from "react"
import { Modal } from "./common/Modal"

export const RecognitionModal = ({ recognition, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: recognition?.title || "",
    subtitle: recognition?.subtitle || "",
    period: recognition?.period || "",
    description: recognition?.description || "",
    logo: recognition?.logo || ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSave({ id: recognition?.id || Date.now().toString(), ...formData })
  }

  return (
    <Modal
      title={recognition ? "Edit Recognition" : "Add Recognition"}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Institution Name
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
            placeholder="e.g. California Institute of the Arts"
          />
        </div>

        <div>
          <label
            htmlFor="subtitle"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Course/Program Name
          </label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
            placeholder="e.g. UX Design Fundamentals"
          />
        </div>

        <div>
          <label
            htmlFor="period"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Period
          </label>
          <input
            type="text"
            id="period"
            name="period"
            value={formData.period}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
            placeholder="e.g. 2020 - 2021"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border rounded-md"
            placeholder="Describe the recognition..."
          />
        </div>

        <div>
          <label
            htmlFor="logo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Logo URL (optional)
          </label>
          <input
            type="text"
            id="logo"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="e.g. https://example.com/logo.png"
          />
        </div>

        <div className="flex justify-end gap-2 pt-2">
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
            {recognition ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </Modal>
  )
}
