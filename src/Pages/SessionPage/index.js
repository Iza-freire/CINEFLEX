import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Cards from "../../componentes/Cards/Cards"
import Footer from "../../componentes/Footer/Footer"

export default function SessionPages({ }) {
    const [filme, setFilme] = useState(undefined)
    const paramentros = useParams()

     useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${paramentros.idFilme}/showtimes`)
        promise.then(resp => setFilme(resp.data))
        promise.catch(erro => console.log(erro.response.data))
    }, [])
    
     if (!filme){
    return <div className="Carregando">Carregando pagina</div>
   }
   console.log(filme)

    return (
        <>
        <SessionContainer>
            <h1>Selecione o horário</h1>
            <>
                {filme.days.map(f => (
                    <Cards key={f.id} filme={f} />
                ))}
            </>
        </SessionContainer>
        <Footer poster={filme.posterURL} title={filme.title}/>
        </>
    )
}
const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color:#293845;;
    margin-top: 40px;
    padding-bottom: 120px;
    padding-top: 70px;
    button{
        width: 80px;
    }
    h1{
        margin-bottom: 20px;
    }

`