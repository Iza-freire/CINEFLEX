import styled from "styled-components"

export default function Rodape({poster, titulo, data, hora}) {
    return (
        <ConteudoRodape data-test="footer">
            <ConteudoPoster>
                <img src={poster}/>
            </ConteudoPoster>
            <ConteudoTitulo>
                <h1>{titulo}</h1>
                <h5>{data && hora && <p>{data} - {hora}</p>}</h5>
            </ConteudoTitulo>
        </ConteudoRodape>
    )
}
const ConteudoRodape = styled.div`
    position: fixed;
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 26px;
    bottom: 0;
    color: #293845;
    border: 1px solid #9EADBA;
    h5{
        margin-top: 10px;
    }
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