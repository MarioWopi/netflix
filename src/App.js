import logo from './logo.svg';
import './App.css';
import { CrearContraseña, FormCorreo, SeleccionarPlan } from './FormCorreo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='contenido'>
          <br/><br/>
          {/* <CrearContraseña></CrearContraseña> */}
          {/* <FormCorreo></FormCorreo> */}
          <SeleccionarPlan></SeleccionarPlan>
        </div>

      </header>
    </div>
  );
}

export default App;
