import styled from "styled-components"

export default function PaginaSucesso(){
    return(
        <>
        <ContainerPagina>
                <h1>Pedido feito <br /> com sucesso!</h1>
                <Texto>
                    <h5>Filme e sessão</h5>
                    <p>Adão Negro</p>
                    <p>24/06/2021 15:00</p>
                </Texto>
                <Texto>
                    <h5>Ingressos</h5>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </Texto>
                <Texto>
                    <h5>Comprador</h5>
                    <p>Nome: João da Silva Sauro</p>
                    <p>CPF: 123.456.789-10</p>
                </Texto>
                <button>Voltar pra Home</button>
        </ContainerPagina>
       

        </>
    )
}


const ContainerPagina = styled.div`
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
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const Texto = styled.div`
    width: 100%;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h5 {
        font-weight: 700;
        margin-bottom: 15px;
    }
 `