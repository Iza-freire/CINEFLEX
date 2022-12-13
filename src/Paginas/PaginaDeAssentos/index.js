import styled from "styled-components"
import Forms from "./Forms"
import Opcoes from "./Opcoes"
import Rodape from "../../Componentes/Rodape"
import CardAssento from "../../Componentes/CardAssento"

export default function PaginaDeAssentos() {
    return (
        <ConteudoPagina>
            Selecione o(s) assento(s)
            <ConteudoDosAssentos>
                <CardAssento />
            </ConteudoDosAssentos>

            <Opcoes />

            <Forms />

            <Rodape />

        </ConteudoPagina>
    )
}

const ConteudoPagina = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const ConteudoDosAssentos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`