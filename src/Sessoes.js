import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

export default function Sessoes() {
    const { idFilme } = useParams();

    return (
        <MovieSectionsScreen>
            <MovieSections>
                Essa é a sessão {idFilme}
            </MovieSections>


        </MovieSectionsScreen>
    )
}
const MovieSectionsScreen = styled.div`
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
const MovieSections = styled.div`
    height: 100%;
    width: 100%;
    padding-top: 67px;
    display: flex;
    flex-direction: column;
`;