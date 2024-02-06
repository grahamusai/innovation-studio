import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  
  return (
    <main className=" py-24 px-24">
      <Navbar />
      <h1 className="text-[4rem] font-black text-white ">REACHING THE <br /><span className="text-black font-thin font-outline-2">VERTEX OF  </span>DESIGN<br />EXCELLENCE</h1>
      <div class="container mx-auto py-8">
    <div class="flex flex-wrap -mx-4">

        <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl text-black text-right font-semibold uppercase pb-3 text-[3rem] mb-4">Port</h2>
                <h2 class="text-xl text-black text-right font-semibold uppercase pb-3 text-[3rem] mb-4">foli</h2>
                <h2 class="text-xl text-black text-right font-semibold uppercase text-[3rem] mb-4">o</h2>
            </div>
        </div>

        <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-white py-4 px-2 rounded-lg shadow-md">
                <h2 class="text-xl text-black font-semibold text-center text-[3rem] mb-4">Services</h2>
                <p>Content goes here.</p>
            </div>
        </div>

        <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold mb-4">Column 3</h2>
                <p>Content goes here.</p>
            </div>
        </div>

    </div>
</div>
    </main>
  );
}
