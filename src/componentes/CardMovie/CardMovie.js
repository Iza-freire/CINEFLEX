import styled from "styled-components"

export default function CardMovies({URL}){
    return (
        <CardContainer>
            <MovieImg src={URL}/>
        </CardContainer>
    )
}

const CardContainer = styled.div`           
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MovieImg = styled.img`
    width: 129px;
    height: 193px;
`
