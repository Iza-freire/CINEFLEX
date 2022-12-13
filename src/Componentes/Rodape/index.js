import styled from "styled-components"

export default function Rodape({poster, titulo}) {
    return (
        <ConteudoRodape>
            <ConteudoPoster>
                <img src={poster}/>
            </ConteudoPoster>
            <ConteudoTitulo>
                <h1>{titulo}</h1>
                
            </ConteudoTitulo>
        </ConteudoRodape>
    )
}
const ConteudoRodape = styled.div`
    position: fixed;
    width: 100%;
    height: 120px;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    bottom: 0;
`
const ConteudoPoster = styled.div`
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    margin: 12px;
    img {
        width: 50px;
        height: 70px;
        padding: 8px;
    }
`
const ConteudoTitulo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`