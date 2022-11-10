import { Link } from 'react-router-dom'
import  Search  from './Search'


export default function Nav () {
    return (
        <div className='Links'>
            <Link to = "/"> Home </Link>
            <Link to = "/Games"> Featured Game </Link>
            <Search />
            

        </div>
    )
}