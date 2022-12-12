import styled from "styled-components"
import Footer from "../../componentes/Footer/Footer"

export default function SessionPages({ }) {
    return (
        <>
        <SessionContainer>
            <h1>Selecione o horário</h1>
            <SessionData>
                <p>Quinta-feira - 24/06/2021</p>
                <SessionData>
                    <button>15:30</button>
                    <button>15:30</button>
                </SessionData>
            </SessionData>
        </SessionContainer>
        <Footer/>
        </>
    )
}
const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color:#293845;;
    margin-top: 40px;
    padding-bottom: 120px;
    padding-top: 70px;
    button{
        width: 80px;
    }
    h1{
        margin-bottom: 20px;
    }

`
const SessionData = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 30px;
    padding: 0 20px;
    
`