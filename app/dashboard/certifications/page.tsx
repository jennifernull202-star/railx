"use client";

import { useState } from "react";

export default function CertificationsPage() {
  const [certifications, setCertifications] = useState<any[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [certName, setCertName] = useState("");
  const [uploading, setUploading] = useState(false);

  async function uploadCertification() {
    if (!file || !certName) {
      alert("Please provide a certification name and file");
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", certName);

      const res = await fetch("/api/certifications/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Certification uploaded successfully!");
        setFile(null);
        setCertName("");
        // Reload certifications
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-railBlue">Certifications</h1>
        <p className="text-gray-600 mt-2">Upload business licenses, insurance, and industry certifications.</p>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Upload New Certification</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Certification Name
            </label>
            <input
              type="text"
              value={certName}
              onChange={(e) => setCertName(e.target.value)}
              className="w-full p-3 border rounded-lg"
              placeholder="e.g., FRA Certification, Business License"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Upload Document (PDF, JPG, PNG)
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <button
            onClick={uploadCertification}
            disabled={uploading || !file || !certName}
            className="bg-railBlue text-white px-6 py-3 rounded-lg font-semibold hover:bg-railBlue/90 transition disabled:opacity-50"
          >
            {uploading ? "Uploading..." : "Upload Certification"}
          </button>
        </div>
      </div>

      {/* Existing Certifications */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Your Certifications</h2>
        
        {certifications.length === 0 ? (
          <p className="text-gray-600">No certifications uploaded yet.</p>
        ) : (
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📄</span>
                  <div>
                    <p className="font-semibold">{cert.name}</p>
                    <p className="text-sm text-gray-500">
                      Uploaded {new Date(cert.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-railBlue hover:underline"
                >
                  View →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Verification Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
        <h3 className="font-bold text-blue-900 mb-2">🏆 Get Verified</h3>
        <p className="text-blue-800 text-sm">
          Upload your business documents and certifications to become a verified seller. 
          Verified sellers get higher visibility and increased buyer trust.
        </p>
      </div>
    </div>
  );
}
