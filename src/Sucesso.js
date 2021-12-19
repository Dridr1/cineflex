import React from 'react'
import styled from 'styled-components'

export default function Sucesso({selectedSeatsIDs, selectedSeatsNum}) {
    return (
        <SucessoContainer>
            <InfoContainer>
                <h2>Filme e sessão</h2>
                <br/>
                <span>Enola Holmes</span><br/>
                <span>24/06/2022 15:00</span>
            </InfoContainer>
            <InfoContainer>
                <h2>Ingressos</h2>
                <br/>
                {selectedSeatsNum.map(seatNum => <><span>Assento {seatNum}</span><br/></>)}
            </InfoContainer>
            <InfoContainer>
                <h2>Comprador</h2>
                <br/>
                <span>Nome: Joãozinho da Silvassauro</span><br/>
                <span>CPF: 023.944.713-10</span>
            </InfoContainer>
        </SucessoContainer>
    )
}

const SucessoContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 100px;
    font-family: 'Roboto';
    padding-left: 23px;
`;
const InfoContainer = styled.div`
margin-bottom: 50px;
    h2{
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
    }
    span{
        font-size: 22px;
        line-height: 26px;
    }
`;