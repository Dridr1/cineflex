import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import BottomBar from './BottomBar';

import React from 'react'

export default function Seats({setMovie, setSection, name, setName, CPF, setCPF, setSelectedSeatsIDs, setSelectedSeatsNum, selectedSeatsNum, selectedSeatsIDs }) {



    const navigate = useNavigate();
    const { idSessao } = useParams();
    const [sectionInfos, setSectionsInfos] = useState(null);

    let allFilled = name !== "" && CPF !== "" && (CPF.length === 11 || CPF.length === 14) && selectedSeatsNum.length > 0;

    useEffect(() => {
        const seatsRequest = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        seatsRequest.then(promise => {
            setSectionsInfos(promise.data);
            setMovie(promise.data.movie.title);
            setSection(`${promise.data.day.date} ${promise.data.name}`);
        });
    }, [idSessao, setMovie, setSection]);

    function handleSelectUnavailableSeat(e) {
        alert('Esse assento não está disponível');
    };

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
                                isAvailable={true}
                                id={seat.id}
                                borderColor="#808F9D"
                                backgroundColor="#C3CFD9"
                                onClick={(e) => {
                                    if (e.target.style.backgroundColor !== 'rgb(141, 215, 207)') {
                                        e.target.style.backgroundColor = '#8DD7CF';
                                        e.target.style.border = '1px solid #1AAE9E';
                                        setSelectedSeatsNum([...selectedSeatsNum, (index + 1)]);
                                        setSelectedSeatsIDs([...selectedSeatsIDs, seat.id]);
                                    }
                                    else {
                                        e.target.style.backgroundColor = '#C3CFD9';
                                        e.target.style.border = '1px solid #808F9D';
                                        const filteredNum = selectedSeatsNum.filter(num => num !== index + 1);
                                        setSelectedSeatsNum(filteredNum);

                                    }
                                }
                                }
                                key={seat.id}>
                                {index + 1}
                            </Seat>
                        );
                    }
                    else {
                        return (
                            <Seat isAvailable={false} borderColor="#F7C52B" backgroundColor="#FBE192" onClick={handleSelectUnavailableSeat} key={seat.id}>
                                {index + 1}
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
                <input onChange={e => {
                    setCPF(e.target.value);
                }} placeholder='Digite seu CPF...' />


                {/* <Link style={{pointerEvents: allFilled ? 'auto' : 'none'}} disabled={true} to={'/sucesso'}> */}
                <Button disabled={!allFilled} allFilled={allFilled}
                    onClick={() => {
                        const data = {
                            ids: selectedSeatsIDs,
                            name: name,
                            cpf: CPF
                        };
                        const promise = axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many', data);
                        promise.then(() => {
                            navigate('/sucesso');
                        });
                    }}>
                    <span>Reservar assento(s)</span>
                </Button>
                {/* </Link> */}


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
    margin-bottom: 130px;
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
    cursor: ${props => props.isAvailable ? 'pointer;' : 'not-allowed;'}
    line-height: 13px;
    text-align: center;
    font-size: 11px
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
    margin-top: 40px;
    margin-bottom:130px;
    input{
        width: 100%;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        padding-left: 18px;
        font-size: 18px;
        line-height: 21px;
        ::placeholder{
            font-style: italic;
        }
    }
    label{
        width: 100%;
        font-size: 18px;
        line-height: 21px;
        text-align: left;
    }
`;
const Button = styled.button`
    margin-top: 57px;
    width: 225px;
    height: 42px;
    background: #E8833A;
    opacity: ${props => props.allFilled ? 1 : 0.6};
    border-radius: 3px;
    border: none;
    color: white;
    font-size: 18px;
    line-height: 21px;
    cursor: ${props => props.allFilled ? 'pointer' : 'not-allowed'};
    & :first-child{
        cursor: ${props => props.allFilled ? 'pointer;' : 'not-allowed;'}
    }
`;