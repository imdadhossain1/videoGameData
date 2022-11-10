import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Games () {

    // We need to create a state for our data
    const [Games, setGames] = useState({})


    // We need to call an axios function

    useEffect(() => {
    const getData = async () => {
    const response = await axios.get(`https://api.rawg.io/api/games/3498?key=19ea189648d04ef2adc585d18f2103c3`)
    console.log(response.data)

    // We need to set state of our data
    setGames(response.data)
    }

    getData()

}, [])


    

   
    // We need to see the data

    console.log(Games)
    // Lets also make a guard operator so if data takes a few seconds out site doesn't break
    if (!Games) {
        return <h2> Loading please wait </h2>
    }
    else {
        
    return (
        <div>
             <div>
              <img className="gameImage" src={Games.background_image} />
            </div>
            <h2>Name: {Games.name}</h2>
            <h4>Metacritic: {Games.metacritic}/100</h4>
            <h5>Description: {Games.description_raw} </h5>
            <h5>Official website of game: {Games.website} </h5>

        </div>
    )
}

}