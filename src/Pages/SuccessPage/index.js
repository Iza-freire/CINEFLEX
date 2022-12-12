import styled from "styled-components"

export default function SuccessPage(){
    return(
        <>
        <SuccessContainer>
                <Titulo>Pedido feito <br /> com sucesso!</Titulo>
                <Texto>
                    <strong><p>Filme e sessão</p></strong>
                    <p>Adão Negro</p>
                    <p>24/06/2021 15:00</p>
                </Texto>
                <Texto>
                    <strong><p>Ingressos</p></strong>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </Texto>
                <Texto>
                    <strong><p>Comprador</p></strong>
                    <p>Nome: João da Silva Sauro</p>
                    <p>CPF: 123.456.789-10</p>
                </Texto>
                <button>Voltar pra Home</button>
        </SuccessContainer>
       

        </>
    )
}


const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    margin: 30px 20px;
    padding-top: 70px;
    margin-top: 40px;
    button {
        margin-top: 50px;
    }
`
const Titulo = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #247A6B;
`
const Texto = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 15px;
    }
`