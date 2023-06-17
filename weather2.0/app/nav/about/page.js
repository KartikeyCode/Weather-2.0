import Navbar from "@/app/components/navbar"

export default function About(){
    return(
        <div className="bg-gradient-to-r from-[#1F6E8C] to-[#2E8A99] min-h-screen overflow-x-hidden">
            <Navbar></Navbar>
            <h1 className="font-Orbitron xl:text-7xl xl:mt-12 xl:ml-12 text-white"> Welcome to Weather 2.0 </h1>
            <h2 className="font-Orbitron xl:text-5xl xl:mt-12 xl:ml-12 text-white">Welcome to our weather website, your ultimate destination for accurate and up-to-date weather information! Whether you're planning a trip, curious about the forecast, or simply want to stay informed about the current conditions, we've got you covered. With just a few clicks, you can explore the weather outlook for any city around the globe.</h2>
        </div>
    )
}