"use client";

import React, { useState } from "react";

const UploadSection = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const handleUpload = async (file: File, type: "image" | "video") => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert(`${type} uploaded successfully!`);
    } else {
      alert("Upload failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-6 bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">Upload Your Marketing Content</h2>

      <div className="flex flex-col gap-4">
        <label className="block font-medium">Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          className="bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            if (e.target.files) setImageFile(e.target.files[0]);
          }}
        />
        <button
          className="p-2 bg-blue-600 text-white rounded hover:bg-blue-500 active:bg-blue-700"
          onClick={() => imageFile && handleUpload(imageFile, "image")}
        >
          Upload Image
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <label className="block font-medium">Upload Video:</label>
        <input
          type="file"
          accept="video/*"
          className="bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => {
            if (e.target.files) setVideoFile(e.target.files[0]);
          }}
        />
        <button
          className="p-2 bg-green-600 text-white rounded hover:bg-green-500 active:bg-green-700"
          onClick={() => videoFile && handleUpload(videoFile, "video")}
        >
          Upload Video
        </button>
      </div>
    </div>
  );
};

export default UploadSection;
