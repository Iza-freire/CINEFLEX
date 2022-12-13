import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button{
        height: 43px;
        border: none;
        border-radius: 3px;
        color: #FFFFFF;
        font-size: 18px;
        margin-left: 5px;
        background-color: #E8833A;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 20px;
    }

    input {
	background: #FFFFFF;
	border: 1px solid #D4D4D4;
	border-radius: 3px;
	height: 51px;
	margin-bottom: 25px;
	margin-top: 15px;
	padding: 0 8px;
	font-family: 'Roboto';
	font-size: 18px;
	display: flex;
	align-items: center;
    color: #293845;
	&::placeholder{
		font-style: italic;
        color: #AFAFAF;
	}
    }
    a{
        text-decoration: none;
    }
`
export default GlobalStyle

export const Colors = {
    Selecionado: { background: "#1AAE9E", border: "#0E7D71" },
    Disponivel: { background: "#C3CFD9", border: "#808F9D" },
    Indisponivel: { background: "#FBE192", border: "#F7C52B" }
}
export const UrlComum = "https://mock-api.driven.com.br/api/v8/cineflex"