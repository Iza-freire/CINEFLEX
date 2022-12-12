import styled from "styled-components"

export default function CardMovies({ posterURL }){
    return (
        <CardContainer>
            <MovieImg src={posterURL} />
        </CardContainer>
    )
}

const CardContainer = styled.div`           
    width: 145px;
    height: 209px;
    box-shadow:0px 2px 4px 2px #0000001A;;
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
