import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Order from './Order/main'
import logoMinus from "./assets/minus.svg"
let itens = []
let appetizer = 0.00
let exits     = 0.00
                                                  //Arrumar Numeros na entrada, para que sejam do tipo float
                                                  //E na saída para que seja uma string com virgula
function arrayRemove(arr, value){ 
  return arr.filter((ele)=>{ 
      return ele != value; 
  });
}

function TransitionRow({description, value, data, id}){
  return(
      <tr>
          <td>{description}</td>
          <td className={String(value)[0]==="-"
                          ?"marginNegative"
                          :"marginPositive"  
                        }>{value}</td>
          <td>{data}</td>
          <td><img onClick={()=>{
            itens = arrayRemove(itens, itens[id])
            console.log(String(value)[0])
            load()
          }} src={logoMinus} alt="logoMinus" /></td>
      </tr>
  )
}

function load(){
  ReactDOM.render(
    <React.StrictMode>
      <App itens={itens} appetizer={appetizer} exits={exits}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
load()

document.getElementById('doom--form')
.addEventListener("submit", e=>{
  e.preventDefault();
  let [a, b, c] = Order.getValues()
  if(Number(b) > 0){appetizer+=Number(b)}
  else(exits-=Number(b))
  itens.push(Order.getValues())
  load()
  Order.resetDoom()
})

export default TransitionRow