import styled from "styled-components"


export default function Forms() {

    return (
        <ConteudoForm >
            <h1>Nome do Comprador:</h1>
            <input
                data-test="client-name"
                name="name"
                placeholder="Digite seu nome..."
                type="text"
            />

            <h1>CPF do Comprador:</h1>
            <input
                data-test="client-cpf"
                name="cpf"
                placeholder="Digite seu CPF..."
                type="number"
            />
            <button type="submit">Reservar Assento(s)</button>
        </ConteudoForm>
    )
}

const ConteudoForm = styled.form`
    width: calc(100vw - 30px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 70px);
    }
`