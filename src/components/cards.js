function Cards({appetizer, logoEntradas, exits, logoSaidas}){
    return(
        <>
            <div className="card card--appetizers">
                <h3 className="card--title">Entradas</h3>
                <p className="card--value">R$ {String(appetizer.toFixed(2)).replace('.',',')}</p>
                <img className="icon--card" src={logoEntradas} alt="logo entradas" />
            </div>

            <div className="card card--exits">
            <h3 className="card--title">Saídas</h3>
            <p className="card--value">R$ {String(exits.toFixed(2)).replace('.',',')}</p>
            <img className="icon--card" src={logoSaidas} alt="logo entradas" />
            </div>

            <div className="card allTransactions">
            <h3 className="card--title">Total</h3>
            <p className="card--value">R$ {String((appetizer-exits).toFixed(2)).replace('.',',')}</p>
            <span className="icon--card icon--margin">$</span>
            </div>
        </>
    )
}

export default Cards;