import { Link } from "react-router-dom"
import styled from "styled-components"

export default function CardDaSessão({ filme }) {
    return (
        
        <ConteudoDaSessao data-test="movie-day">
            {filme.weekday} - {filme.date}
            <ConteudoBotao data-test="movie-day">
                {filme.showtimes.map((d) => (
                    <Link key={d.name} to={`/assentos/${d.id}`}>
                        <button data-test="showtime" >{d.name}</button>
                    </Link>
                ))}
            </ConteudoBotao>
        </ConteudoDaSessao>
    )
}

const ConteudoDaSessao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: black;
    padding: 0 20px;
`
const ConteudoBotao = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
`