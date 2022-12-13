import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UrlComum } from "../../assets/GlobalStyle"
import styled from "styled-components"
import CardDoFilme from "../../Componentes/CardDoFilme"

export default function PaginaInicial(){
    const [filmes, setFilmes] = useState(undefined)
    
   useEffect(() => {
        axios.get(`${UrlComum}/movies`)
            .then(res => setFilmes(res.data))
            .catch(err => console.log(err.response.data))
    }, [])

   if (!filmes){
    return <div className="Carregando">Carregando pagina</div>
   }

    return (
        <ConteudoPagina>
            Selecione o filme
            <ListaDeConteudo>
                {filmes.map(f => (
                    <Link to={`/sessoes/${f.id}`} key={f.id}>
                        <CardDoFilme posterURL={f.posterURL} />
                    </Link>
                ))}
            </ListaDeConteudo>
        </ConteudoPagina>
    )
}
const ConteudoPagina = styled.div`
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
const ListaDeConteudo = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 10px;
    padding: 20px;

`