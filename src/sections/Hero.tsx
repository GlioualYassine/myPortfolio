import memojiImage from "@/assets/images/me.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      <div className="absolute inset-0 -z-30 opacity-5" 
      style={{
        backgroundImage: `url(${grainImage.src})`,
        
      }}>

      </div>
      <div className="absolute inset-0 size-[620px] border-2 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border-emerald-300/5">

      </div>
      <div className="container">
       <div className="flex flex-col items-center">
         <Image
           className="size-[200px]"
           src={memojiImage}
           alt="Person peeking from behind laptop"
         />
         <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
           <div className="bg-green-500 size-2.5 rounded-full"></div>
           <div className="text-sm font-medium">Available for new projects</div>
         </div>
       </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 ">Building Exceptional User Experiences</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional, high-performing
            web applications . Let's discuss your next project
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white h-12 px-6 rounded-xl bg-white text-gray-900">
            <span className="">👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};