import React from "react";
import { GoRelFilePath } from "react-icons/go";
import { GoAlertFill } from "react-icons/go";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function Home() {
  return (
    <div className="flex font-kanit justify-center h-screen ">
      <div className="flex flex-col">
        <div className="px-[133px] text-[25px]">0 1 1 0</div>
        <div className="px-[133px] text-[25px]">1 0 0 1</div>
        <div className="px-[133px] text-[25px]">1 0 1 0</div>
        <div className="text-[100px] px-[70px]">CGC</div>
        <div className="text-[50px]">CyberGeekClub</div>
      </div>
    </div>
  );
}
