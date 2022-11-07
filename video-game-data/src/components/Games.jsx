import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Games () {

    // We need to create a state for our data
    const [Games, setGames] = useState({})


    // We need to call an axios function

    useEffect(() => {
    const getData = async () => {
    const response = await axios.get("https://api.rawg.io/api/games?key=19ea189648d04ef2adc585d18f2103c3")
    console.log(response.data)

    }

    getData()

}, [])


    // We need to set state of our data

   
    // We need to see the data

    console.log(Games)
    // Lets also make a guard operator so if data takes a few seconds out site doesn't break
    if (!Games) {
        return <h2> Loading please wait </h2>
    }
    else {
        
    

    return (
        <div>
            <h2> Data goes here</h2>
        </div>
    )
}

}