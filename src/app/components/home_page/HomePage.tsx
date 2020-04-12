import * as React from "react";
import './HomePage.scss';
//import { ReactComponent } from "*.svg";
import { Button } from '@material-ui/core';

function HomePage() {
    return (
        <div className="HomePage">
            <p>
                Ez egy webes alkalmazás, ami segít a tanulásban kártyák segítségével. Az alkalmazás lényege, hogy bárki létrehozhat
                tanulókártyákat kategóriákba szedve, amit a létrehozó fél és az alkalmazás többi felhasználója is szabadon segítségül
                hívhat tanulása során. Az alkalmazás a jól ismert tanulókártyás módszereken felül pontrendszert alkalmaz a következő kártyák
                előfordulásának gyakoriságának meghatározására.
            </p>
            <Button>Témák</Button>
            <Button>Új téma létrehozása</Button>
            <p>Ajánlott témák: </p>
            <Button>Analízis 1</Button>
            <br />
            <Button>Logika</Button>
            <br />
            <Button>Analízis 100</Button>
            <br />
            <Button>...</Button>
            <br />
        </div>
    );
}

export default HomePage;
