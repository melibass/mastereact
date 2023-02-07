import logo from './logo.svg';
import './App.css';

//importar componente 
import Saludo from './components/Saludo';

function App() {
  const age = 16;
  return (
    <div className="App">
     {/* Llamo a la funcion como una html tag */}
     {age < 20 ? <Saludo /> : ""}
    </div>
  );
}

export default App;
