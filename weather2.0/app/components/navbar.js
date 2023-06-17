"use client"
import Link from "next/link"
import Image from "next/image"
import menu from "../../public/menu.png"
import { useState } from "react"

export default function Navbar(){
    const [hide,setHide] = useState(true)
    return(
        <div className="relative">
        <div className=" w-screen md:py-0 py-4 md:h-16 xl:h-24 bg-gradient-to-r from-[#0E2954] to-[#001e4e] md:justify-between md:flex md:items-center">
            <div className="flex justify-between">
            <a href="/" className="text-white mx-5 xl:mx-10 self-center font-bold font-Cinzel xl:text-6xl select-none">Weather 2.0</a>
            <Image onClick={()=>setHide((current)=>!current)} className="self-center md:hidden mr-6 cursor-pointer" src={menu}></Image>    
            </div>
            
            <div className={`md:my-0 z-15 md:z-auto mr-20 md:px-0 md:py-0 px-4 py-2 md:block ${hide ? "hidden" : ""}`}>
                <div className="flex flex-col md:flex-row">
                <Link href="/" className="text-white text-sm font-bold font-Cinz mr-6 xl:text-2xl"> Home </Link> 
                <Link href="/nav/about" className="text-white text-sm font-bold font-Cinz mr-6 xl:text-2xl"> About </Link>
                <Link href="/nav/contact" className="text-white text-sm font-bold font-Cinz mr-6 xl:text-2xl"> Contact </Link>
                </div>
                </div>
        </div>
        </div>
    )
}