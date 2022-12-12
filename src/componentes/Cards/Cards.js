import { Link } from "react-router-dom"
import styled from "styled-components"
export default function Cards({filme}){
    return (
        <SessionData>
            {filme.weekday} - {filme.date}
            <SessionData>
                {filme.showtimes.map((d) => (
                    <Link key={d.name} to={`/assentos/:${d.id}`}>
                        <button >{d.name}</button>
                    </Link>
                ))}
            </SessionData>
        </SessionData>
    )

}
const SessionData = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 30px;
    padding: 0 20px;
    font-size: 20px;
   
`