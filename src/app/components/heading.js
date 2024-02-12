import React from "react";
import { GoArrowUpLeft } from "react-icons/go";

export default function Heading() {
  return (
    <div>
      <div>
        <h1 className="text-7xl">REACHING THE </h1>
      </div>
      <div className="ml-8">
        <h1 className="text-7xl">VERTEX OF DESIGN</h1>
      </div>
      <div>
        <h1 className="text-7xl">EXCELLENCE</h1>
      </div>

      <div className="flex gap-8 mt-6">
        <div className="md:w-1/3 flex bg-white p-8 rounded-2xl text-black">
          <div className="md:w-1/3 text-6xl mt-[9rem]">
            <GoArrowUpLeft />
          </div>
          <div className="md:w-2/3 text-right">
            <h2 className="text-7xl mr-2">
              <span className="mr-">PORT</span> <br /> FOLI
              <br />O
            </h2>
          </div>
        </div>
        <div className="md:w-1/3 bg-white text-black rounded-2xl px-5 py-5">
          <div className="flex gap- pt-4">
            <div className="md:w-1/3 bg-orange-500 rounded-lg px-4 py-4 text-center">
                <h3 className="text-white">Lets Talk</h3>
            </div>
            <div className="md:w-2/3">
                <h3 className="text-4xl">Our Amazing</h3>
            </div>
          </div>
          <h2 className="text-center text-6xl pt-6">Services</h2>
        </div>
        <div className="md:w-1/3 bg-white px-5 py-5">
          <h2>Hello</h2>
        </div>
      </div>
    </div>
  );
}
