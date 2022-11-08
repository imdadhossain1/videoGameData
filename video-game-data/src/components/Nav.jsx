import { Link } from 'react-router-dom'
import  Search  from './Search'

export default function Nav () {
    return (
        <div>
            <Link to = "/"> Home </Link>
            <Link to = "/Games"> Games </Link>
            <Search />

        </div>
    )
}