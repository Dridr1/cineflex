import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TopBar from './TopBar';
import Sessoes from './Sessoes';
import Seats from './Seats';
import Sucesso from './Sucesso';
import "./reset.css";

export default function App() {
    const [selectedSeatsIDs, setSelectedSeatsIDs] = useState([]);
    const [selectedSeatsNum, setSelectedSeatsNum] = useState([]);
    const [movie, setMovie] = useState('');
    const [section, setSection] = useState('');
    const [name, setName] = useState('');
    const [CPF, setCPF] = useState('');



    return (
        <BrowserRouter>
            <TopBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sessoes/:idFilme' element={<Sessoes />} />
                <Route path='/assentos/:idSessao' element={<Seats
                    selectedSeatsIDs={selectedSeatsIDs}
                    selectedSeatsNum={selectedSeatsNum}
                    setSelectedSeatsIDs={setSelectedSeatsIDs}
                    setSelectedSeatsNum={setSelectedSeatsNum}
                    name={name}
                    setName={setName}
                    CPF={CPF}
                    setCPF={setCPF}
                    setSection={setSection}
                    setMovie={setMovie}
                />} />
                <Route path='/sucesso' element={<Sucesso name={name} CPF={CPF} movie={movie} section={section} selectedSeatsIDs={selectedSeatsIDs} selectedSeatsNum={selectedSeatsNum} />} />
            </Routes>
        </BrowserRouter>
    )
}