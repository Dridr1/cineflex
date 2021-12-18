import React from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BottomBar from './BottomBar';

export default function Sessoes() {
    const { idFilme } = useParams();

    const [sectionsList, setSectionsList] = useState(null);

    useEffect(() => {
        const SectionsListRequest = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
        SectionsListRequest.then(promise => setSectionsList(promise.data));
    }, []);

    if (sectionsList === null) {
        return (
            <div>
                Carregando...
            </div>
        )
    }

    return (
        <>
            <MovieSectionsScreen>
                <PageSubTitle>
                    <h2>Selecione o horário</h2>
                </PageSubTitle>

                <MovieSections>
                    {sectionsList.days.map(section => {
                        return (
                            <Day key={section.id}>
                                <h3>{section.weekday} - {section.date}</h3>
                                <ShowTimes>
                                    {section.showtimes.map(showtime => {
                                        return (
                                            <div key={showtime.id}>
                                                <Link style={{textDecoration: 'none', color: 'white'}} to=  {`/assentos/${showtime.id}`}>
                                                    <span>{showtime.name}</span>
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </ShowTimes>
                            </Day>
                        );
                    })}
                </MovieSections>

            </MovieSectionsScreen>
            <BottomBar imgURL={sectionsList.posterURL} movieTitle={sectionsList.title} />
        </>
    )
}

const Day = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;
    h3{
        font-size: 20px;
        line-height: 23px;
    }
`
const ShowTimes = styled.div`
    display: flex;
    gap: 8px;
    & div{
        width: 83px;
        height: 43px;
        background-color: #E8833A;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        color: white;
        font-size: 18px;
        line-height: 21px;
    }
`
const PageSubTitle = styled.div`
    height: 102px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 67px;
`

const MovieSectionsScreen = styled.div`
    width: 100%;
    min-height: 102px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 130px;
    padding-left: 23px;
    font-family: 'Roboto';
    & h2{
        font-family: Roboto;
        font-size: 24px;    
        line-height: 28px;
    }
`;
const MovieSections = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:23px;
`;