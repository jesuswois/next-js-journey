import axios from "axios"


const URL: string = "https://openholidaysapi.org"


export const api = {
    getHolidays: async (countryIsoCode: string) => {
        const response = await axios.get(URL+`/PublicHolidays?countryIsoCode=${countryIsoCode}&validFrom=2023-01-01&validTo=2023-12-31`)
        return response.data
    },
    getCountries: async () => {
        const response = await axios.get(URL+"/Countries?languageIsoCode=ES")
        return response.data
    }
}
