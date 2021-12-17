import React from 'react'
import styled from 'styled-components'

export default function TopBar() {
    return (
        <Container>
            <h1>CINEFLEX</h1>
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