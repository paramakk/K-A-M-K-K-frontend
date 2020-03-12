import * as React from "react";
import "./App.scss";
import HomePage from "./components/home_page/HomePage";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <HomePage />
            </header>
        </div>
    );
};

export default App;
