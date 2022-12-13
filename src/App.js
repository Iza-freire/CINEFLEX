import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/GlobalStyle"
import PaginaDeAssentos from "./Paginas/PaginaDeAssentos"
import PaginaInicial from "./Paginas/PaginaInicial"
import PaginaDeSessoes from "./Paginas/PaginaDeSessoes"
import NavBar from "./Componentes/NavBar"
import PaginaSucesso from "./Paginas/PaginaSucesso"


function App() {
 
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar/>
      <Routes>
        <Route path="/" element={<PaginaInicial/>}/>
        <Route path="/sessoes/:idFilme" element={<PaginaDeSessoes />}/>
        <Route path="/assentos/:idSessao" element={<PaginaDeAssentos />}/>
        <Route path="/sucesso" element={<PaginaSucesso/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
