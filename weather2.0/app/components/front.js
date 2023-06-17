"use client"
import { useState } from "react";
const axios = require('axios')
export default function Front(){
    require('dotenv').config();
   const apiK = process.env.API_KEY;
   console.log(apiK)
    const [inputText, setInputText] = useState("")
    const [hide,setHide] = useState("hidden")
    const [weather, setWeather] = useState([])
    
    const handleChange = (e) => {
        setInputText(e.target.value);
      };

      async function handleSub() {
        const query = inputText
        try {
          const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q='+query+'&appid='+apiK+'&units=metric');
          
          const desc = response.data.weather[0].main;
          const temper = response.data.main.temp;
          setWeather([desc,temper])
          console.log(weather)
          setHide("")
        } catch (error) {
          console.error(error);

        }
      }

    return(
        <div>
            <section class="bg-gradient-to-r from-[#1F6E8C] to-[#2E8A99]">
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-xl text-center">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Check the Weather
        <strong class="font-extrabold text-[#84A7A1] sm:block">
          For Any City
        </strong>
      </h1>

      <p class="mt-4 sm:text-xl/relaxed">
        Type your city's name below
      </p>

        <div className="mt-4">
            <input onChange={handleChange} value={inputText} className="rounded-full px-4"></input>
        </div>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        
        
        <button onClick={handleSub}
          class="block w-full rounded bg-[#0E2954] px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          >
          Get Weather Details
        </button>
        <div className="flex">
        <h2 className={`${hide} font-Orbitron text-xl xl:text-5xl xl:mt-12 xl:ml-12 text-white`}> Weather: {weather[0]} </h2>
        <h2 className={`${hide} font-Orbitron text-xl xl:text-5xl xl:mt-12 xl:ml-12 text-white`}>Temperature: {weather[1]} </h2>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )

}