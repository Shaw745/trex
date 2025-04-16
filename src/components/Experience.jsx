import React from "react";

const Experience = () => {
  return (
    <div className="layout h-[1200x]">
      <h1 className="w-[300px] h-[120px] font-bold text-[#1D1D1D] text-2xl mt-10 ">
        Experience Luxury Without Compromises
      </h1>
      <div className=" h-[800px] flex justify-around  flex-col lg:flex-row lg:h-[250px] ">
        <div className="w-[250px] h-[250px] mx-auto rounded-[14px] border shadow-xl border-gray-200 pt-[21px] pr-[18px] pb-[21px] pl-[18px]">
          <h1 className="text-3xl font-medium mb-4.5"> comfort</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            aliquid inventore rem quasi at ad sit velit corrupti soluta ipsam.
          </p>
        </div>
        <div className="w-[250px] h-[250px] mx-auto rounded-[14px] border shadow-xl border-gray-200 pt-[21px] pr-[18px] pb-[21px] pl-[18px]">
          <h1 className="text-3xl font-medium mb-4.5"> Insurance</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            aliquid inventore rem quasi at ad sit velit corrupti soluta ipsam.
          </p>
        </div>
        <div className="w-[250px] h-[250px]  mx-auto rounded-[14px] border shadow-xl border-gray-200 pt-[21px] pr-[18px] pb-[21px] pl-[18px]">
          <h1 className="text-3xl font-medium mb-4.5"> commitment </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            aliquid inventore rem quasi at ad sit velit corrupti soluta ipsam.
          </p>
        </div>
      </div>
      <div className=" text-center lg:flex justify-between">
        <div className=" mt-15  ">
          <h1 className="text-gray-500  ">
            Trusted by customers since{" "}
            <span className="font-bold text-black"> 1990</span>
          </h1>
        </div>
        <div className="  mt-7 py-5 lg:flex-row lg:flex lg:gap-15">
          <div className="pt-2">
            <p className="text-gray-500">Trusted customers</p>
            <h1 className=" font-semibold text-2xl"> 2000+</h1>
          </div>
          <div className="pt-2">
            <p className="text-gray-500">
              Available cars
            </p>
            <h1 className=" font-semibold text-2xl"> 134+</h1>
          </div>
          <div className="pt-2">
            <p className="text-gray-500">Total Reservation </p>
            <h1 className=" font-semibold text-2xl"> 134+</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
