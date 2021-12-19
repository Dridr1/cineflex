import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TopBar from './TopBar'
import Sessoes from './Sessoes'
import "./reset.css"
import Seats from './Seats'

export default function App() {
    const [name, setName] = useState(null);
    const [CPF, setCPF] = useState(null);
    const [selectedSeatsIDs, setSelectedSeatsIDs] = useState([]);
    const [selectedSeatsNum, setSelectedSeatsNum] = useState([]);

    return (
        <BrowserRouter>
            <TopBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sessoes/:idFilme' element={<Sessoes />} />
                <Route path='/assentos/:idSessao' element={<Seats setCPF={setCPF} setName={setName} setSelectedSeatsIDs={setSelectedSeatsIDs} setSelectedSeatsNum={setSelectedSeatsNum} />} />
            </Routes>
        </BrowserRouter>
    )
}
