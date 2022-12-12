import styled from "styled-components"
export default function Seat(){
    return (
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
            </ListOfContainer>
    )
}
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