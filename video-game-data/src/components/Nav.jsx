import { Link } from 'react-router-dom'
import  Search  from './Search'
import SearchResults from './SearchResults'

export default function Nav () {
    return (
        <div>
            <Link to = "/"> Home </Link>
            <Link to = "/Games"> Games </Link>
            <Search />
            

        </div>
    )
}