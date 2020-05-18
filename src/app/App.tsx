import * as React from "react";
import "./App.scss";
import HomePage from "./components/home_page/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Subject from "./components/theme/Theme";
import Learning from "./components/learning/Learning";
import Categories from "./components/categories/Categories";
import Category from "./components/category/Category";
import EditTheme from "./components/edit_theme/EditTheme";
import EditCardGroup from "./components/edit_card_group/EditCardGroup";

const App = () => {
    return (
        <div className="App">
            <Router>
                <div>
                    <Switch>
                        <Route path="/tanulas/:id" component={Learning}/>
                        <Route path="/kartya-csoport/hozzaadas" component={EditCardGroup} />
                        <Route path="/kartya-csoport/:id/szerkesztes" component={EditCardGroup} />
                        <Route path="/temak/:id2/hozzaadas" component={EditTheme} />
                        <Route path="/temak/:id2/szerkesztes/:id" component={EditTheme} />
                        <Route path="/temak/:id" component={Subject} />
                        <Route path="/kategoriak/:id" component={Category} />
                        <Route path="/kategoriak" component={Categories} />
                        <Route path="/" component={HomePage} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
