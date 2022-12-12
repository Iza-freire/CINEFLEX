import GlobalStyle from "./assents/GlobalStyle";
import NavBar from "./componentes/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
import SessionPages from "./Pages/SessionPage";
import SeatsPage from "./Pages/SeatsPage";
import SuccessPage from "./Pages/SuccessPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/sessoes/:idFilme" element={<SessionPages/>}/>
        <Route path="/assentos/:idSessao" element={<SeatsPage/>}/>
        <Route path="/sucesso" element={<SuccessPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


