import React from "react";

const Qrs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-[50%] mx-auto">
      <div className="flex-1">
        <img
          src="/qr1.jpg"
          alt="Image 1"
          className="w-full h-auto object-cover rounded"
        />
      </div>
      <div className="flex-1">
        <img
          src="/qr2.jpeg"
          alt="Image 2"
          className="w-full h-auto object-cover rounded"
        />
      </div>
    </div>
  );
};

export default Qrs;
