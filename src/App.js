import GlobalStyle from "./assents/GlobalStyle";
import NavBar from "./componentes/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
import SessionPages from "./Pages/SessionPage";
import SeatsPage from "./Pages/SeatsPage";
import SuccessPage from "./Pages/SuccessPage";



function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar/>
      {/**<HomePage/>**/}
     <SessionPages/>
      {/*<SuccessPage/>*/}
    </>
  );
}

export default App;


