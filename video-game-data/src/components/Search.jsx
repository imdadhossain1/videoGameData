import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function Search () {

    const [formState, setFormState] = useState ("");
    const [searchTerm, setSearchTerm] = useState(null);
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        navigate(`/search/${searchTerm[""]}`)
    }

    const handleChange=(e)=>{
        setSearchTerm({...searchTerm, [""]:e.target.value})
        console.log(searchTerm)
    }

    // const getSearch = async () => {

    //     console.log(formState)
    //     const response = await axios.get(

    //     );
    //     console.log(response.Game.data);

    //     // setSearch(response.Game.data)
    // };

    return (
        <div className="search">
            <form id="input" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Search for Game"
            value={formState.subject}
            onChange={handleChange}
            />
    
            <button className="searchButton"  value>
                <input type="button" id="searchButton" value ="Search"></input>
            </button>
    
            </form>
            {/* <div className="searchResults">
                {search?.map((data) => (
                    <div key={data.name} className="searchCard">
                        <h3>Game Title: {data.Games.name} </h3>
                    </div>
    
                    // <div>
                    // <img className="searchImage"
                    // src="data.Games.background_image"/>
                    // </div>
                ))}
    
            </div> */}
    
        </div>
    )

}

