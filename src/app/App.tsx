import * as React from "react";
import "./App.scss";
import HomePage from "./components/home_page/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Subject from "./components/subject/Subject";
import Learning from "./components/learning/Learning";
import EditSubject from "./components/edit_subject/EditSubject";

const App = () => {
    return (
        <div className="App">
            <Router>
                <div>
                    <Switch>
                        <Route path="/tanulas/:id" component={Learning}/>
                        <Route path="/kartya-csoport/:id/szerkeztes" component={EditSubject} />
                        <Route path="/temak/:id" component={Subject} />
                        <Route path="/" component={HomePage} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
