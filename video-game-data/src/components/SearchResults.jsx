import { useParams } from "react-router-dom";
import { useState, useEffect} from 'react'
import axios from "axios";

export default function SearchResult () {

    const {name} = useParams()
    const [results, setResults] = useState(null)
    useEffect(() => {
        const getData = async () => {
            // const

            const response = await axios.get(`https://api.rawg.io/api/games?key=19ea189648d04ef2adc585d18f2103c3&search${name}`)
            console.log(response)
            setResults(response.results)
        }
        getData()
    }, [])


}