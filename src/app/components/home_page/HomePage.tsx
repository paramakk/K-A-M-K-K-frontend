import * as React from "react";
import './HomePage.scss';
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div className="HomePage">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <button>Témák</button>
            <button>Új téma létrehozása</button>
            <p>Ajánlott témák: </p>
            <Link to="temak/1">Analízis 1</Link>
            <Link to="temak/2">Analízis 2</Link>
            <Link to="temak/100">Analízis 100</Link>
        </div>
    );
}

export default HomePage;
