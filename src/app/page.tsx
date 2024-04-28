
"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/lib/utils/cn";

export default function Home() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        <img className="z-0 scale-[95%]" src="https://firebasestorage.googleapis.com/v0/b/cybergeek-storage-image.appspot.com/o/logoCGC_TW.png?alt=media&token=71bbdae0-f43b-4e89-85e2-a1a4701f2e12"/>
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
       NOTHING WILL WORK UNLESS YOU DO
      </p>
    </div>
  );
}
