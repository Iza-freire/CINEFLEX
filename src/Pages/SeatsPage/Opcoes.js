import styled from "styled-components"
export default function Opcoes() {
    return (
        <CaptionContainer>
            <CaptionItem>
                <CaptionCircle />
                Selecionado
            </CaptionItem>
            <CaptionItem>
                <CaptionCircle />
                Disponível
            </CaptionItem>
            <CaptionItem>
                <CaptionCircle />
                Indisponível
            </CaptionItem>
        </CaptionContainer>
    )
}
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: space-between;
    margin: 10px;
`
const CaptionCircle = styled.div`
    border: 1px solid red;
    background-color: red;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`