import styled from "styled-components"
import Footer from "../../componentes/Footer/Footer"
import Forms from "./Forms"
import Opcoes from "./Opcoes"


export default function SeatsPage(){
    return(
        <HomeContainer>
            Selecione o(s) assento(s)
            <ListOfContainer>
                <ButtonContainer>1</ButtonContainer>
                <ButtonContainer>1</ButtonContainer>
                <ButtonContainer>1</ButtonContainer>
                <ButtonContainer>1</ButtonContainer>
                <ButtonContainer>1</ButtonContainer>
                <ButtonContainer>1</ButtonContainer>
                <ButtonContainer>1</ButtonContainer>
                <ButtonContainer>1</ButtonContainer>
                <ButtonContainer>1</ButtonContainer>
                <ButtonContainer>1</ButtonContainer>
                <ButtonContainer>1</ButtonContainer>
            </ListOfContainer>
            <Opcoes/>
            <Forms/>
            <Footer />
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
    padding: 10px 30px ;
`
const ButtonContainer = styled.button`
        width: 26px;
        height: 26px;
        border-radius: 12px;
        background-color: #C3CFD9;
        border: 1px solid #808F9D;
        font-size: 11px;
        color: black;
        margin-top: 20px;
        padding: 5px;
`