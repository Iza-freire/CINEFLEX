import styled from "styled-components"

export default function Footer({poster, title}) {
    return (
        <FooterOfContainer>
            <PosterOfContainer>
                <img src={poster}/>
            </PosterOfContainer>
            <TitleOfContainer>
                {title}
            </TitleOfContainer>
        </FooterOfContainer>
    )
}

const FooterOfContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    position: fixed;
    bottom: 0;
`
const PosterOfContainer = styled.div`
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
const TitleOfContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`