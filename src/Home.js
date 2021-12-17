import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Poster from './Poster';
import axios from 'axios';
export default function Home() {

    const [movieList, setMovieList] = useState(null);
    const [movieID, setMovieID] = useState(null);

    useEffect(() => {
        const MovieListRequest = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies');

        MovieListRequest.then(promise => setMovieList(promise.data));
    }, []);

    if(movieList === null){
        return(
            <div>
                Carregando...
            </div>
        )
    }

    return (
        <HomeScreen>
        
            <HomeTitle>
                <h2>Selecione seu filme</h2>
            </HomeTitle>

            <MoviePosters>
                {movieList.map(movie => <Poster key={movie.id} setMovieID={setMovieID} CurrentMovieID={movieID} id={movie.id} imageURL={movie.posterURL}/>)}
            </MoviePosters>
        
        </HomeScreen>
    )
}

const HomeScreen = styled.div`
    height: 100%;
    width: 100%;
    padding-top: 67px;
    display: flex;
    flex-direction: column;
`;

const HomeTitle = styled.div`
    width: 100%;
    min-height: 102px;
    display: flex;
    justify-content: center;
    align-items: center;
    & h2{
        font-family: Roboto;
        font-size: 24px;    
        line-height: 28px;
    }
`;

const MoviePosters = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 11px 30px;
`