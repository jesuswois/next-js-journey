"use client";

import { api } from "@/utils/api";
import { useEffect, useState } from "react";
import CountriesDropdown from "./components/CountriesDropdown";
import "./page.css";

export default function Home() {
  const [countryIsoCode, setCountryIsoCode] = useState("");
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    async function fetchHolidays() {
      if (countryIsoCode == "") return;
      const response = await api.getHolidays(countryIsoCode);
      setHolidays(response);
      console.log(response);
    }
    fetchHolidays();
  }, [countryIsoCode]);

  return (
    <>
      <div id="main">
        <div id="wrapper">
          <div id="page-header">
            <h1>Open Holidays API!</h1>
            <div id="select-wrapper">
              <p>Choose a country to check their holidays!</p>
              <CountriesDropdown setCountry={setCountryIsoCode} />
            </div>
          </div>
          <hr width={'80%'}/>
          <div style={{width: '80%', height: '100%'}}>
          {holidays.length < 0 ? (
                <p>Select a country to inspect the holidays!</p>
              ) : (
                <ul style={{height: '40rem', overflowY:'scroll'}}>
                  {holidays.map((holiday, idx) => {
                    return <li key={idx}>{holiday.name[2].text}</li>;
                  })}
                </ul>
          )}
          </div>
        </div>
      </div>
    </>
  );
}
