import '../styles/doom.css'

function Doom(){

    let save = (e)=>{
        // let doom = document.getElementById("doom")
        // doom.style.visibility = 'hidden'
        let pelicula = document.getElementById("pelicula")
        pelicula.style.visibility = 'hidden'
    }

    let cancel = ()=>{
        // let doom = document.getElementById("doom")
        // doom.style.visibility = 'hidden'
        let pelicula = document.getElementById("pelicula")
        pelicula.style.visibility = 'hidden'
    }

    return(
        <div id="pelicula">
            <div id="doom">
                <div className="doom--sub">
                    <form action="" id="doom--form">
                        <h2>Nova Transação</h2>
                        <input id="doom--descriptionInput" className="doom--element" placeholder="Descrição" type="text"></input>
                        <p className="doom--description">Use o sinal - (negativo) para despesas e , (vírgula) para casas decimais</p>
                        <input id="doom--moneyValue" step="0.01" className="doom--element" placeholder="Valor" type="number"></input>
                        <input id="doom--date" className="doom--element" type="date"></input>
                        <div className="doom--buttons">
                            <button className="doom--button cancel" onClick={cancel}>Cancelar</button>
                            <button type="submit" className="doom--button ok" onClick={e=>save(e)}>Ok</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Doom