import Cards from './components/cards'
import TransitionRow from './index'
import Doom from './components/doom'
import './styles/app.css';
import './styles/cards.css'
import './styles/transition.css'
import logo from "./assets/logo.svg"
import logoEntradas from "./assets/income.svg"
import logoSaidas from "./assets/expense.svg"



function App({itens, appetizer, exits}) {
  return (
    <>
      <header>
            <img className="icon--valoriza" src={logo} alt="Logo Dev Finance"/>
      </header>
      <main>
        <Cards 
        appetizer={appetizer}
        logoEntradas={logoEntradas}
        exits={exits}
        logoSaidas={logoSaidas}
        />
        <div className="div--cartoes"></div>

        <div className="button--newItem">
          <a onClick={
            ()=>{
            //document.getElementById("doom").style.visibility = 'visible' 
            document.getElementById("pelicula").style.visibility = 'visible'
            }} href="/#"
          >
            +Nova Transação
          </a>
        </div>

        <Doom/>

        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {itens.map((e, key)=>{
              return <TransitionRow key={key} id={key} description={e[0]} value={e[1]} data={e[2]} />
            })
            }
          </tbody>
          
        </table>

      </main>
      <footer>
        <span className="span--footer">dev.finance$</span>
      </footer>
    </>
  );
}



export default App;
