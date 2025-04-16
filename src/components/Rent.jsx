import React from 'react'

const Rent = () => {
  return (
    <div>
      <div className="rent  layout w-full h-[400px] py-20 text-center flex flex-col gap-3 lg:items-center lg:justify-center rounded-[16px]">
        <h1 className="text-white font-semibold text-2xl w-[330px]  ">
          {" "}
          Rent A Vehicle That Gives You The Confidence As You Ride.{" "}
        </h1>
        <button
         className="w-[180px] h-[42px] rounded-[44px]  mx-auto text-xl bg-white text-black font-semibold cursor-pointer lg:items-end"
        >
          {" "}
          Rent A Car Now{" "}
        </button>
      </div>
    </div>
  );
}

export default Rent