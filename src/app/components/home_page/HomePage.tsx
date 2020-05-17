import * as React from "react";
import './HomePage.scss';
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div className="HomePage">
            <p>
                Ez egy webes alkalmazás, ami segít a tanulásban kártyák segítségével. Az alkalmazás lényege, hogy bárki létrehozhat
                tanulókártyákat kategóriákba szedve, amit a létrehozó fél és az alkalmazás többi felhasználója is szabadon segítségül
                hívhat tanulása során. Az alkalmazás a jól ismert tanulókártyás módszereken felül pontrendszert alkalmaz a következő kártyák
                előfordulásának gyakoriságának meghatározására.
            </p>
            <button>Témák</button>
            <button>Új téma létrehozása</button>
            <p>Ajánlott témák: </p>
            <Link to="temak/1">Analízis 1</Link><br/>
            <Link to="temak/2">Analízis 2</Link><br/>
            <Link to="temak/100">Analízis 100</Link><br/>
        </div>
    );
}

export default HomePage;
