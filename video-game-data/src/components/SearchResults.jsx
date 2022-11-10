import { useParams } from "react-router-dom";
import { useState, useEffect} from 'react'
import axios from "axios";


export default function SearchResults () {

    const {name} = useParams()
    const [results, setResults] = useState(null)
    useEffect(() => {
        const getData = async () => {
            // const

            const response = await axios.get(`https://api.rawg.io/api/games?key=19ea189648d04ef2adc585d18f2103c3&search=${name}`)
            console.log(response.data.results)
            setResults(response.data.results)
        }
        getData()
    }, [])


return results ? (

     <div className="searchResults">
                <div>
               
                    <div className="searchCard">
                        <h1>Game Title: {results[0].name} </h1>
                   
                    <img className="searchImage"
                    src={results[0].background_image}/>
                    
                    <h2> ESRB Rating: {results[0].esrb_rating.name}</h2>


                    <h1> Metacritic Score: {results[0].metacritic}</h1>

                    <h3> Release date: {results[0].released}</h3>

                    <h3> Genre: {results[0].genres[0].name}</h3>

                    
                    </div>

                </div>
    
            </div> ):<div></div>


}