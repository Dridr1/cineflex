import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TopBar from './TopBar'
import Sessoes from './Sessoes'
import "./reset.css"
import Seats from './Seats'

export default function App() {
    return (
        <BrowserRouter>
            <TopBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sessoes/:idFilme' element={<Sessoes/>}/>
                <Route path='/assentos/:idSessao' element={<Seats/>}/>
            </Routes>
        </BrowserRouter>
    )
}
