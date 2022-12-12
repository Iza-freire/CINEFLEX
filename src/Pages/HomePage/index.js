import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import CardMovies from "../../componentes/CardMovie/CardMovie"


export default function HomePage(){
    const [filmes, setFilmes] = useState(undefined)
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies`)
        promise.then(resp => setFilmes(resp.data))
        promise.catch(erro => console.log(erro.response.data))
    }, [])

   if (!filmes){
    return <div className="Carregando">Carregando pagina</div>
   }
    return(
        <HomeContainer>
        Selecione o filme 
        <ListOfContainer>
            {filmes.map(f => (
                <Link to={`/sessoes/${f.id}`} key={f.id}> <CardMovies posterURL={f.posterURL}/></Link>
            ))}
            
        </ListOfContainer>
        </HomeContainer>
    )
}
const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    text-align: center;
    color:#293845;
    font-family: 'Roboto';
    padding-top: 70px;
    margin-top: 40px;
`
const ListOfContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 10px;
    padding: 20px;

`