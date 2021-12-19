import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import BottomBar from './BottomBar';

import React from 'react'

export default function Seats({ setName, setCPF, setSelectedSeatsIDs, setSelectedSeatsNum }) {

    const { idSessao } = useParams();
    const [sectionInfos, setSectionsInfos] = useState(null);

    let selectedSeatsArr = [];
    let selectedSeatsIDArr = [];

    useEffect(() => {
        const seatsRequest = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        seatsRequest.then(promise => setSectionsInfos(promise.data));
    }, []);

    function handleSelectUnavailableSeat(e) {
        alert('Esse assento não está disponível');
    }

    function handleSelectSeat(e) {

    }

    if (sectionInfos === null) {
        return (
            <div>Carregando...</div>
        );
    }
    return (
        <SeatsScreen>
            <SeatsSubtitle><span>{`Selecione o(s) assento(s)`}</span></SeatsSubtitle>
            <BottomBar imgURL={sectionInfos.movie.posterURL} movieTitle={sectionInfos.movie.title} session={`${sectionInfos.day.weekday} - ${sectionInfos.name}`} />
            <SeatsList>
                {sectionInfos.seats.map((seat, index,) => {
                    if (seat.isAvailable) {

                        return (
                            <Seat
                                id={seat.id}
                                borderColor="#808F9D"
                                backgroundColor="#C3CFD9"
                                onClick={(e) => {
                                    if (e.target.parentNode.style.backgroundColor !== 'rgb(141, 215, 207)') {
                                        e.target.parentNode.style.backgroundColor = '#8DD7CF';
                                        e.target.parentNode.style.border = '1px solid #1AAE9E';
                                        selectedSeatsArr.push(index+1);
                                        selectedSeatsIDArr.push(seat.id);
                                        console.log(selectedSeatsArr);
                                    }
                                    else{
                                        e.target.parentNode.style.backgroundColor = '#C3CFD9';
                                        e.target.parentNode.style.border = '1px solid #808F9D';
                                        selectedSeatsArr.splice(selectedSeatsArr.indexOf((index+1)),1);
                                        console.log(selectedSeatsArr)
                                    }
                                }
                                }
                                key={seat.id}>
                                <span onClick={handleSelectSeat}>{index + 1}</span>
                            </Seat>
                        );
                    }
                    else {
                        return (
                            <Seat borderColor="#F7C52B" backgroundColor="#FBE192" onClick={handleSelectUnavailableSeat} key={seat.id}>
                                <span>{index + 1}</span>
                            </Seat>
                        );
                    }
                })}
            </SeatsList>
            <SeatsLegend>
                <div>
                    <Seat borderColor="#1AAE9E" backgroundColor="#8DD7CF" />
                    <span>Selecionado</span>
                </div>
                <div>
                    <Seat borderColor="#808F9D" backgroundColor="#C3CFD9" />
                    <span>Disponível</span>
                </div>
                <div>
                    <Seat borderColor="#F7C52B" backgroundColor="#FBE192" />
                    <span>Indisponível</span>
                </div>
            </SeatsLegend>

            <Inputs>
                <label>Nome do comprador</label>
                <input onChange={e => setName(e.target.value)} placeholder='Digite seu nome...' type="text" />
                <label>CPF do comprador</label>
                <input onChange={e => setCPF(e.target.value)} placeholder='Digite seu CPF...' />
                <Button><span>{`Reservar assento(s)`}</span></Button>
            </Inputs>
        </SeatsScreen>
    );
}


const SeatsScreen = styled.div`
    width: 100%;
    height: 100%;
    padding: 67px 23px 130px 23px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SeatsSubtitle = styled.div`
    min-height: 102px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    span{
        vertical-align: center;
        font-family: 'Roboto';
        font-size: 24px;
        line-height: 28px;
    }
`;

const SeatsList = styled.div`
    display: flex;
    gap: 18px 7px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
const Seat = styled.div`
    width: 26px;
    height: 25px;

    background: ${props => props.backgroundColor};
    border: 1px solid ${props => props.borderColor};
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto';
    span{
        width: 100%;
        height: 100%;
        font-size: 11px;
        line-height: 13px;
        text-align: center;
        display: flex;
        align-items: center;  
        justify-content: center
    }

`;

const SeatsLegend = styled.div`
    width: 100%;
    font-family: 'Roboto';
    display: flex;
    justify-content: space-around;
    margin-top: 18px;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 9px;
        font-size: 13px;
        line-height: 15px;
    }
`;

const Inputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    justify-content: center;
    align-items: center;
    gap: 7px;
    margin-top: 42px;
    input{
        width: 100%;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }
    label{
        width: 100%;
        font-size: 18px;
        line-height: 21px;
        text-align: left;
    }
`;
const Button = styled.button`
    margin-bottom: 130px;
    border: none;
    background: #E8833A;
    border-radius: 3px;
    margin-top: 50px;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    span{
        color: white;
    }
`;