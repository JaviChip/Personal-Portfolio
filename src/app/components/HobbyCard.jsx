import React from "react";

const HobbyCard = ({ imgUrl, title, description }) => {
  return (
    <div className="group overflow-hidden rounded-xl ">
      {/* Image with hover expansion */}
      <div
        className=" md:h-[550px] rounded-t-xl relative group md:w-[400p] group-hover:scale-110 transition-transform duration-500"
        style={{ background: `url(${imgUrl})`, backgroundSize: "contain" }}
      >
      </div>
      
      {/* Title and description */}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default HobbyCard;
