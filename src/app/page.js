import Image from "next/image";
import Navbar from "./components/navbar";
import SplitType from "split-type";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export default function Home() {


    return (
        <main className=" py-24 px-24">
            <Navbar />
            <h1 className="text-[4rem] font-black text-white" id="my-text">REACHING THE <br /><span className="text-black font-thin font-outline-2 ml-12">VERTEX OF  </span>DESIGN<br />EXCELLENCE</h1>
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">

                    <div className="w-full md:w-1/3 px-4 ">
                        <div className="bg-white rounded-lg shadow-md">
                            <p className=" text-black text-right font-semibold uppercase text-[4rem] ">Port<br />foli <br />o</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3">
                        <div className="bg-white rounded-lg p-4 shadow-md">
                            <div className="flex">
                                <div className="w-full md:w-1/2 mx-2">
                                    <p className=" bg-orange-500 py-2 text-center rounded-md">Lets Talk</p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <p className="text-black">About Our<br /> Amazing</p>
                                </div>
                            </div>

                            <h2 className="text-black font-semibold text-center text-[4rem]">Services</h2>
                            <p>Content goes here.</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 ">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold">Column 3</h2>
                            <p>Content goes here.</p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
