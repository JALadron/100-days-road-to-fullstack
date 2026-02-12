import logo from './logo.svg';
import './App.css';

import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';
import { TercerComponente } from './components/TercerComponente';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Prueba de modificación src/app.js</p>
        <SegundoComponente/>
        <PrimerComponente/>
        <TercerComponente />


      </header>
    </div>
  );
}

export default App;
