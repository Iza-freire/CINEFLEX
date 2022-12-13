import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { UrlComum } from "../../assets/GlobalStyle"
import CardDaSessão from "../../Componentes/CardDaSessão"
import Rodape from "../../Componentes/Rodape"



export default function PaginaDeSessoes() {
    const [filme, setFilme] = useState(undefined)
    const parametros = useParams()

     useEffect(() => {
        axios.get(`${UrlComum}/movies/${parametros.idFilme}/showtimes`).then(resp => setFilme(resp.data)).catch(erro => console.log(erro.response.data))
    }, [])
    
     if (!filme){
    return <div className="Carregando">Carregando pagina</div>
   }
   console.log(filme)

    return (
        <>
        <ConteudoDaSessoes>
            <h1>Selecione o horário</h1>
            <>
                {filme.days.map(f => (
                    <CardDaSessão key={f.id} filme={f} />
                ))}
            </>
        </ConteudoDaSessoes>
        <Rodape poster={filme.posterURL} titulo={filme.title}/>
        </>
    )
}
const ConteudoDaSessoes = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 140px;
    padding-top: 70px;
    color:#293845;
    font-family: 'Roboto';
    font-size: 24px;
    button{
        width: 80px;
    }
    h1{
        margin-bottom: 20px;
    }

`