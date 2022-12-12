import { Link } from "react-router-dom"
import styled from "styled-components"


export default function NavBar(){
    return(
        <HearderNav>
            <Link to="/">CINEFLIX</Link>
        </HearderNav>
    )
}

const HearderNav = styled.div`
    width: 100%;
    height: 70px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    position: fixed;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    top: 0;
    a{
        text-decoration:none;
        color:#E8833A;
    }

`