import { useEffect, useState } from "react"
import styled from "styled-components"
import { Colors } from "../../assets/GlobalStyle"

export default function CardAssento({ seat, handleSeats, isSelected }) {
    const [status, setStatus] = useState("Selecionado")

    useEffect(() => {
        if (isSelected) {
            setStatus("Selecionado")
        } else if (seat.isAvailable) {
            setStatus("Disponivel")
        } else {
            setStatus("Indisponivel")
        }
    }, [isSelected])

    return (
        <ItemdoAssento data-test="seat" status={status} onClick={() => handleSeats(seat)}>
            {seat.name}
        </ItemdoAssento>
    )
}

const ItemdoAssento = styled.div`
    height: 26px;
    width: 26px;
    border-radius: 18px;
    border: 1px solid ${props => Colors[props.status].border};
    background-color: ${props => Colors[props.status].border};
    font-size: 12px;
    font-family: 'Roboto';
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`