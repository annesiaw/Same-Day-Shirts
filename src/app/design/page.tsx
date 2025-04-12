'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function DesignUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-display text-center mb-8">Upload Your Design</h1>
      
      <div className="max-w-2xl mx-auto">
        {/* File Upload Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Upload Your Artwork</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              accept=".svg,.eps,.pdf,.png"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer block"
            >
              <div className="text-gray-600 mb-4">
                <svg
                  className="mx-auto h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium">Click to upload your design</p>
              <p className="text-sm text-gray-500 mt-2">
                Supported formats: SVG, EPS, PDF, PNG
              </p>
            </label>
          </div>
        </div>

        {/* File Specifications */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">File Specifications</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Minimum resolution: 300 DPI</li>
            <li>Preferred format: Vector files (SVG, EPS)</li>
            <li>Maximum file size: 50MB</li>
            <li>Transparent background preferred</li>
            <li>CMYK color mode recommended</li>
          </ul>
        </div>

        {/* Preview Section */}
        {preview && (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Design Preview</h2>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src={preview}
                alt="Design preview"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <button className="btn-primary">
                Proceed to Order
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
} 