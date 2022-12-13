import styled from "styled-components"
import { Colors } from "../../assets/GlobalStyle"

export default function Opcoes() {
    return (
        <OpcoesCont>
            <OpcaoStatus>
                <OpBorder status="Selecionado" />
                Selecionado
            </OpcaoStatus>
            <OpcaoStatus>
                <OpBorder status="Disponivel" />
                Disponível
            </OpcaoStatus>
            <OpcaoStatus>
                <OpBorder status="Indisponivel" />
                Indisponível
            </OpcaoStatus>
        </OpcoesCont>

    )
}

const OpcoesCont = styled.div`
    width: 80%;
    margin: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   
`
const OpcaoStatus = styled.div`
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const OpBorder = styled.div`
    height: 26px;
    width: 26px;
    border-radius: 18px;
    border: 1px solid ${props => Colors[props.status].border};
    background-color: ${props => Colors[props.status].background};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
`