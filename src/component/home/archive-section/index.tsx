import React from "react";

export const ArchiveSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${require("../../../assets/image6.png")})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "50vh",
      }}
      className="mt-20"
    >
      <div className="text-white flex flex-col items-center justify-center h-full ">
        <h6 className="text-3xl font-semibold">Our Achievements</h6>
        <div className="grid grid-cols-12  mt-10 ">
          <div className="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12 flex flex-col justify-center items-center">
            <p className="text-6xl">80</p>
            <h6 className="text-lg">Number Of Volunteers</h6>
          </div>
          <div className="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12 flex flex-col justify-center items-center">
            <p className="text-6xl">4</p>
            <h6 className="text-lg">Certifications</h6>
          </div>
          <div className="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12 flex flex-col justify-center items-center">
            <p className="text-6xl">10000+</p>
            <h6 className="text-lg">People We Helped</h6>
          </div>
          <div className="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12 flex flex-col justify-center items-center">
            <p className="text-6xl">5</p>
            <h6 className="text-lg">Branches</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
