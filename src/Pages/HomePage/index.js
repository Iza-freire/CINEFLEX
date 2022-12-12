import styled from "styled-components"
import CardMovies from "../../componentes/CardMovie/CardMovie"


export default function HomePage(){
    return(
        <HomeContainer>
        Selecione o filme 
        <ListOfContainer>
            <CardMovies URL={"https://static-cse.canva.com/blob/759754/IMAGE1.jpg"}/>
            <CardMovies URL={"https://static-cse.canva.com/blob/759754/IMAGE1.jpg"}/>
            <CardMovies URL={"https://static-cse.canva.com/blob/759754/IMAGE1.jpg"}/>
            <CardMovies URL={"https://static-cse.canva.com/blob/759754/IMAGE1.jpg"}/>
            <CardMovies URL={"https://static-cse.canva.com/blob/759754/IMAGE1.jpg"}/>
            <CardMovies URL={"https://static-cse.canva.com/blob/759754/IMAGE1.jpg"}/>
            <CardMovies URL={"https://static-cse.canva.com/blob/759754/IMAGE1.jpg"}/>
            <CardMovies URL={"https://static-cse.canva.com/blob/759754/IMAGE1.jpg"}/>
            <CardMovies URL={"https://static-cse.canva.com/blob/759754/IMAGE1.jpg"}/>
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