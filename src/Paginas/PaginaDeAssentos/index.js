import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { UrlComum } from "../../assets/GlobalStyle"
import Forms from "../../Componentes/CardAssento/Forms"
import Opcoes from "../../Componentes/CardAssento/Opcoes"
import Rodape from "../../Componentes/Rodape"
import CardAssento from "../../Componentes/CardAssento"

export default function PaginaDeAssentos() {
    const { idSessao } = useParams()
    const [session, setSession] = useState(undefined)
    const [selectedSeats, setSelectedSeats] = useState([])

    useEffect(() => {
        axios.get(`${UrlComum}/showtimes/${idSessao}/seats`).then(res => setSession(res.data)).catch(err => console.log(err.response.data))
    }, [])

    function handleSeats(seat) {
        if (seat.isAvailable === false) {
            alert("Esse assento não está disponível")
        } else {
            const ItemSelecionado = selectedSeats.some(s => seat.id === s.id)
            if (ItemSelecionado) {
                const newList = selectedSeats.filter(s => seat.id !== s.id)
                setSelectedSeats(newList)
            } else {
                setSelectedSeats([...selectedSeats, seat])
            }
        }
    }

    if (!session) {
        return <div className="carregando">Carregando...</div>
    }

    return (
        <ConteudoPagina>
            Selecione o(s) assento(s)

            <ConteudoDosAssentos>
                {session.seats.map(seat => (
                    <CardAssento
                        key={seat.id}
                        seat={seat}
                        handleSeats={handleSeats}
                        isSelected={selectedSeats.some(s => seat.id === s.id)}
                    />
                ))}
            </ConteudoDosAssentos>

            <Opcoes/>

            <Forms/>
            <Rodape poster={session.movie.posterURL} titulo={session.movie.title} data={session.day.weekday} hora={session.name}/>
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