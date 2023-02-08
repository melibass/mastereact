import './App.css';

//importar componente 

import Greeting from './components/Greeting';

import Users from './components/Users'
import USERS_DATA from "./data/users.json"


function App() {

  return (
    <div className="App">
     {/* Llamo a la funcion como una html tag */}
    
     <Greeting text="Trabajando con React"/>
     <Users userList={USERS_DATA}/>
        
    </div>
  );

}

export default App;
