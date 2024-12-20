import React from "react";

const Header = () => {
  const companyName = "Your Company Name";
  const twitterHandle = "@YourTwitter";
  const instaHandle = "@YourInstagram";

  return (
    <header className="flex items-center justify-between w-full p-4 bg-gray-900 text-white">
      {/* Animated PromoForge Section */}
      <div className="text-lg font-bold">
        <span className="animated-text">
          {Array.from("PromoForge - Effortlessly bring your brand to life.").map(
            (char, index) => (
              <span
                key={index}
                className="inline-block opacity-50 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.05}s`, // Delay for each letter
                }}
              >
                {char === " " ? "\u00A0" : char} {/* Non-breaking space */}
              </span>
            )
          )}
        </span>
      </div>

      {/* Company Details on the Far Right */}
      <div className="text-right">
        <h1 className="text-xl font-bold">{companyName}</h1>
        <p>
          Twitter: <span className="text-blue-400">{twitterHandle}</span>
        </p>
        <p>
          Instagram: <span className="text-pink-400">{instaHandle}</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
