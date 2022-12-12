import styled from "styled-components"
export default function Forms(){
    return(
         <FormsContainer>
                Nome do Comprador:
                <input
                    name="name"
                    placeholder="Digite seu nome..."
                    type="text"
                />

                CPF do Comprador:
                <input
                    name="cpf"
                    placeholder="Digite seu CPF..."
                    type="number"
                />
                <button type="submit">Reservar Assento(s)</button>
            </FormsContainer>
    )
}
const FormsContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 60px 0;
    font-size: 18px;
    button {
        align-self: center;
         margin: 40px 0;

    }
    input {
        width: calc(100vw - 60px);
    } `
