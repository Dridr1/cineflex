import React from 'react'
import styled from 'styled-components'

export default function BottomBar({ imgURL, movieTitle, session }) {
    return (
        <BottomBarContainer>
            <BottomBarBanner>
                <img src={imgURL} alt="Um filme legal :)" />
            </BottomBarBanner>
            <Infos>
                <p>{movieTitle}</p>
                <p>{session}</p>
            </Infos>
        </BottomBarContainer>
    )
}

const Infos = styled.div`
    display: flex;
    flex-direction: column;
`

const BottomBarContainer = styled.div`
    width: 100%;
    height: 117px;
    background: #DFE6ED;
    border-top: 1px solid #9EADBA;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    gap: 14px;
    & p{
        font-size: 26px;
        line-height: 30px;
        font-family: Roboto;
    }
`;

const BottomBarBanner = styled.div`
    width: 64px;
    height: 89px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    & img{
        width: 48px;
        height: 72px;
    }
`;