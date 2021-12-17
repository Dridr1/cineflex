import React from 'react'
import styled from 'styled-components'

export default function BottomBar() {
    return (
        <BottomBarContainer>
            <img src="https://picsum/3000" alt="Um filme legal :)" />
            <h3>Movie Title</h3>
        </BottomBarContainer>
    )
}

const BottomBarContainer = styled.div`
    width: 100%;
    height: 117px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
`