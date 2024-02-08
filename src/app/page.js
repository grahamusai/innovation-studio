import Image from "next/image";
import Navbar from "./components/navbar";
import SplitType from "split-type";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { GoArrowUpLeft } from "react-icons/go";

export default function Home() {


    return (
        <main className=" py-24 px-24">
            <Navbar />
            <h1 className="text-[4rem] font-black text-white" id="my-text">REACHING THE <br /><span className="text-black font-thin font-outline-2 ml-12">VERTEX OF  </span>DESIGN<br />EXCELLENCE</h1>
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4 columns-3">

                    <div className="w-full md:w-1/4  mx-auto my-auto">
                        <div className="bg-white p-6 rounded-lg shadow-md mx-auto">
                            <div>
                                <p className=" text-black tracking-widest text-right font-semibold uppercase text-[4rem] ">Port </p>
                                <p className=" text-black tracking-widest text-right font-semibold uppercase text-[4rem] ">foli </p>
                            </div>

                            <div className="flex flex-wrap ">
                                <div className="md:1/2">
                                    <p className=" text-black text-right absolute ml-6 font-semibold uppercase text-[4rem] "><GoArrowUpLeft /></p>
                                </div>
                                <div className="md:1/2 ml-[10rem]">
                                    <p className=" text-black text-right font-semibold uppercase text-[4rem] ">o</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3">
                        <div className="bg-white rounded-lg p-4 shadow-md mx-auto">
                            <div className="flex">
                                <div className="w-full md:w-1/2 mx-2">
                                    <p className=" bg-orange-500 py-6 text-center rounded-md">Lets Talk</p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <p className="text-black text-md">About Our<br /> Amazing</p>
                                </div>
                            </div>

                            <h2 className="text-black font-semibold text-center text-[4rem]">Services</h2>
                            <p>Content goes here.</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 ">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex justify-center">
                                <Image
                                    src="/images/lit.png"
                                    alt="festive"
                                    height={200}
                                    width={200}
                                    className="relative z-20 top-1"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
