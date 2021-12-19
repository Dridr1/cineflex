import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

export default function TopBar() {
    
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Container>
            <h1>CINEFLEX</h1>
            {location.pathname !== '/' ? <Return onClick={() => navigate(-1)}><span>voltar</span></Return> : ''}
        </Container>

    )
}

const Container = styled.div`
    width: 100%;
    height: 67px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C3CFD9;

    & h1{
        font-size: 34px;
        line-height: 40px;
        font-family: Roboto;
        color: #E8833A;
    }
`;

const Return = styled.button`
    width: 50px;
    height: 25px;
    position: absolute;
    left: 13px;
    top: 32%;
    border: none;
    border-radius: 12.5px;
    background: #E8833A;
    color: white;
`