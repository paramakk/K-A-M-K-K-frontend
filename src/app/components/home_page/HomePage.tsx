import * as React from "react";
import './HomePage.scss';

function HomePage() {
    return (
        <div className="HomePage">
            <button>-</button>
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
            <button>Analízis 1</button>
            <br />
            <button>Logika</button>
            <br />
            <button>Analízis 100</button>
            <br />
            <button>...</button>
            <br />
        </div>
    );
}

export default HomePage;
