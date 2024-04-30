import React from "react";
import GridNews from "@/components/news/grid-news";

export default function News() {
    const ls : string[] = ["Hello, World1","Hello, World2","Hello, World3","Hello, World4","Hello, World4","Hello, World4","Hello, World4","Hello, World4","Hello, World4","Hello, World4"]
    return (
        <div className="w-full h-dvh flex flex-col items-center">
            <div className="w-full h-1/5 flex flex-col items-center">
                <h1 className="my-5 text-3xl">News</h1>
                <div className="w-3/5 bg-red-100 h-10 bg-[#302E2E] my-5"></div>
            </div>
            <GridNews list={ls}/>
            
        </div>
    );
}