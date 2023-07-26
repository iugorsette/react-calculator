import { GlobalStyled } from "./GlobalStyled";
import { Calculator } from "./components/Calculator/Calculator";

function App() {
  document.title = "Calculadora";
  return (
    <GlobalStyled>
      <Calculator></Calculator>
    </GlobalStyled>
  );
}

export default App;
