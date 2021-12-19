import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Poster({ CurrentMovieID, imageURL, id, setMovieID }) {

    return (
        <Link to={`/sessoes/${id}`}>
            <PosterContainer >
                <img onClick={() => { setMovieID(id)}} src={imageURL} alt='Movie' />
            </PosterContainer>
        </Link>

    )
}

const PosterContainer = styled.div`
    cursor: pointer;
    width: 145px;
    height: 209px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    & img{
        width: 129px;
        height: 193px
    }
`;