"use client";

import { api } from "@/utils/api";
import { useEffect, useState } from "react"
import CountriesDropdown from "./components/CountriesDropdown";

export default function Home(){
  const [countryIsoCode, setCountryIsoCode] = useState("");
  const [holidays, setHolidays] = useState([])
  
  useEffect(()=>{
    async function fetchHolidays(){
      if (countryIsoCode=="") return
      const response = await api.getHolidays(countryIsoCode)
      setHolidays(response)
      console.log(response)
    }
    fetchHolidays()
  },[countryIsoCode])

  return (
    <>
      <h1>Open Holidays API!</h1>
      <CountriesDropdown setCountry={setCountryIsoCode}/>
      {holidays.length < 0?<p>Select a country to inspect the holidays!</p>:(
        <ul>
          {holidays.map((holiday, idx) => {
            return <li key={idx}>{holiday.name[2].text}</li>
          })}
        </ul>
      )}
    </>
  )

}