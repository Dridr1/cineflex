import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Sucesso({ name, CPF, movie, section, selectedSeatsNum }) {

    function treatCPFEntry(cpf) {
        let noSymbolsCPF = cpf.replace(/[^0-9]/g, '');
        let new_str = '';

        for (let i = 0; i < noSymbolsCPF.length; i++) {
            if (i === 3 || i === 6) new_str += `.${noSymbolsCPF[i]}`;
            else if (i === 9) new_str += `-${noSymbolsCPF[i]}`;
            else new_str += `${noSymbolsCPF[i]}`;
        }

        return new_str;
    }

    const cpf_treated = treatCPFEntry(CPF);

    return (
        <SucessoContainer>
            <InfoContainer>
                <h2>Filme e sessão</h2>
                <br />
                <span>{movie}</span><br />
                <span>{section}</span>
            </InfoContainer>
            <InfoContainer>
                <h2>Ingressos</h2>
                <br />
                <ul>
                    {selectedSeatsNum.map(seatNum => <li key={seatNum}>Assento {seatNum}</li>)}
                </ul>
            </InfoContainer>
            <InfoContainer>
                <h2>Comprador</h2>
                <br />
                <span>Nome: {name}</span><br />
                <span>CPF: {cpf_treated}</span>
            </InfoContainer>
            <ButtonContainer>
                <Link to='/'>
                    <button>Voltar para a Home</button>
                </Link>
            </ButtonContainer>
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
    li{
        font-size: 22px;
        line-height: 26px;
    }
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    button{
        width: 225px;
        height: 42px;
        border: none;
        background: #E8833A;
        border-radius: 3px;
        color: white;
        font-size: 18px;
        line-height: 21px;
    }
`