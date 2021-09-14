import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BackGround from './components/BG';
import Bouton from './components/Bouton';
import { Button} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
    <Header/>
     
     
      <header className="App-header">
        <div className="bt">
          <div className="left">
              <Bouton  text="Vie quotidienne" href="#rien" style={{background:'#197bbd'}}></Bouton>
              <Bouton  text="Nous contacter" href="#rien" style={{background:'#90b937'}}></Bouton>
              <Bouton  text="L'agenda" href="#rien"  style={{background:'#718096'}}></Bouton>
          </div>
          <div className="right">
              <Bouton  text="Vos démarches" href="#rien" style={{background:'#90b937'}}></Bouton>
              <Bouton  text="Numéros utiles" href="#rien" style={{background:'#197bbd'}}></Bouton>
              <Bouton  text="L'actualité" href="#rien" style={{background:'#c8092f'}}></Bouton>
          </div>
        </div>
        
      
        
        
      </header>
      
    </div>
    
  );
}

export default App;
