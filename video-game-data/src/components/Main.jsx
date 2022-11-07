import  { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Games from './Games'

export default function Main () {
    return (
        <div>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Games' element={<Games/>}/>




            </Routes>
        </div>
    )
}