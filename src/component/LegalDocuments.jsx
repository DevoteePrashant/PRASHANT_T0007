import { Trash2, Eye, Edit, FileText } from "lucide-react"
import { useState, useRef } from "react"
import { EditDocumentModal } from "./EditDocumentModal"
import { DeleteConfirmModal } from "./DeleteConfirmModal"
import { ViewDocumentModal } from "./ViewDocumentModal"

export default function LegalDocuments() {
  const [documents, setDocuments] = useState([
    { id: "1", name: "Company GST Certificate", status: "not_uploaded" },
    {
      id: "2",
      name: "Company PAN Card",
      status: "uploaded",
      fileInfo: "PDF 1.21 MB"
    },
    {
      id: "3",
      name: "FSSAI Licence",
      status: "uploaded",
      fileInfo: "PDF 1.21 MB"
    },
    {
      id: "4",
      name: "FSSAI Licance",
      status: "uploaded",
      fileInfo: "PDF 1.21 MB"
    },
    {
      id: "5",
      name: "Company Incorporation Certificate",
      status: "uploaded",
      fileInfo: "PDF 1.21 MB"
    },
    {
      id: "6",
      name: "Shop & Establishment Certificate",
      status: "uploaded",
      fileInfo: "PDF 1.21 MB"
    },
    {
      id: "7",
      name: "MSME or Udhyam",
      status: "uploaded",
      fileInfo: "PDF 1.21 MB"
    },
    { id: "8", name: "ID Card", status: "uploaded", fileInfo: "PDF 1.21 MB" },
    { id: "9", name: "Other", status: "uploaded", fileInfo: "PDF 1.21 MB" }
  ])

  const [selectedDocument, setSelectedDocument] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const fileInputRef = useRef(null)

  const triggerFileInput = docId => {
    setSelectedDocument(documents.find(doc => doc.id === docId) || null)
    setTimeout(() => {
      if (fileInputRef.current) {
        fileInputRef.current.click()
      }
    }, 0)
  }

  const handleFileChange = e => {
    if (!e.target.files || !e.target.files[0] || !selectedDocument) return

    const file = e.target.files[0]
    const fileSize = (file.size / (1024 * 1024)).toFixed(2)
    const fileType =
      file.name
        .split(".")
        .pop()
        ?.toUpperCase() || "FILE"

    setDocuments(docs =>
      docs.map(doc =>
        doc.id === selectedDocument.id
          ? {
              ...doc,
              status: "uploaded",
              fileInfo: `${fileType} ${fileSize} MB`,
              fileData: file
            }
          : doc
      )
    )

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleDelete = docId => {
    setSelectedDocument(documents.find(doc => doc.id === docId) || null)
    setShowDeleteModal(true)
  }

  const confirmDelete = () => {
    if (!selectedDocument) return

    setDocuments(docs =>
      docs.map(doc =>
        doc.id === selectedDocument.id
          ? {
              ...doc,
              status: "not_uploaded",
              fileInfo: undefined,
              fileData: null
            }
          : doc
      )
    )

    setShowDeleteModal(false)
    setSelectedDocument(null)
  }

  const handleView = docId => {
    setSelectedDocument(documents.find(doc => doc.id === docId) || null)
    setShowViewModal(true)
  }

  const handleEdit = docId => {
    setSelectedDocument(documents.find(doc => doc.id === docId) || null)
    setShowEditModal(true)
  }

  const handleSaveEdit = updatedDoc => {
    setDocuments(docs =>
      docs.map(doc => (doc.id === updatedDoc.id ? updatedDoc : doc))
    )
    setShowEditModal(false)
    setSelectedDocument(null)
  }

  return (
    <div className="max-w-5xl mx-auto ">
      {/* <div className="bg-white rounded-xl shadow-sm border m-4"> */}
      <h1 className="text-2xl font-bold mb-6">Legal Information</h1>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
      />

      <div className="space-y-4">
        {documents.map(doc => (
          <div
            key={doc.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-200 rounded flex items-center justify-center">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{doc.name}</h3>
                {doc.status === "uploaded" ? (
                  <p className="text-sm text-gray-500">{doc.fileInfo}</p>
                ) : (
                  <p className="text-sm text-gray-500">Not Uploaded</p>
                )}
              </div>
            </div>

            {doc.status === "uploaded" ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDelete(doc.id)}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                  aria-label="Delete document"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleView(doc.id)}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                  aria-label="View document"
                >
                  <Eye className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleEdit(doc.id)}
                  className="p-2 text-purple-500 hover:text-purple-700 rounded-full hover:bg-purple-50"
                  aria-label="Edit document"
                >
                  <Edit className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => triggerFileInput(doc.id)}
                className="px-6 py-2 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-50"
              >
                Upload
              </button>
            )}
          </div>
        ))}
      </div>

      {/* View Document Modal */}
      {showViewModal && selectedDocument && (
        <ViewDocumentModal
          document={selectedDocument}
          onClose={() => {
            setShowViewModal(false)
            setSelectedDocument(null)
          }}
        />
      )}

      {/* Edit Document Modal */}
      {showEditModal && selectedDocument && (
        <EditDocumentModal
          document={selectedDocument}
          onClose={() => {
            setShowEditModal(false)
            setSelectedDocument(null)
          }}
          onSave={handleSaveEdit}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedDocument && (
        <DeleteConfirmModal
          document={selectedDocument}
          onClose={() => {
            setShowDeleteModal(false)
            setSelectedDocument(null)
          }}
          onConfirm={confirmDelete}
        />
      )}
    </div>
    // </div>
  )
}