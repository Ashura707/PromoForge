import React from "react";

const PreviewModal = () => {
  const youtubeHandle = "@YourYoutube";
  const instaHandle = "@YourInstagram";

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-4">Social Media Preview</h3>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-800 p-4 rounded">
          <p className="font-medium">Instagram:</p>
          <p className="text-blue-400">{instaHandle}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <p className="font-medium">Youtube:</p>
          <p className="text-blue-400">{youtubeHandle}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
