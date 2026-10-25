"use client";

import { api } from "@/utils/api";
import { useEffect, useState } from "react";

export default function CountriesDropdown({setCountry}){
    const [countries, setCountries] = useState({loading: true, data:[]});

    const handleChange = (e) => {
        setCountry(e.target.value)
    }

    useEffect(()=>{
        async function fetchState(){
            const response = await api.getCountries()
            console.log(response)
             setCountries({loading: false, data:response})
        }
        fetchState();

        return () => {}
    },[])
    
    return countries.loading?<p>Loading...</p>:(
        <select onChange={handleChange}>
            {countries.data.map((country,idx)=>{
                return <option key={idx} value={country.isoCode}>{country.name[0].text}</option>
            })}
        </select>
    )
}