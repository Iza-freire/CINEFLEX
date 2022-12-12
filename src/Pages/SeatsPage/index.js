import styled from "styled-components"
import Footer from "../../componentes/Footer/Footer"
import Forms from "./Forms"
import Opcoes from "./Opcoes"
import Seat from "./Seat"


export default function SeatsPage(){
    return(
        <HomeContainer>
            Selecione o(s) assento(s)
            <Seat/>
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