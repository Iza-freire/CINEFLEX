import styled from "styled-components"


export default function NavBar(){
    return(
        <HearderNav>CINEFLIX</HearderNav>
    )
}

const HearderNav = styled.div`
    width: 100%;
    height: 70px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#E8833A;
    font-size: 34px;
    position: fixed;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    top: 0;

`