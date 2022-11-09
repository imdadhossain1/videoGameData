import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import SearchResults from "./SearchResults";



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
        

        // setSearch(response.Game.data)
    

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
            
        
                  
            
        
        </div>
    
     

    )

}

