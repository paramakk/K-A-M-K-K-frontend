import * as React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import { api } from "../../../utils/Api";
import { ThemeType } from "../../../types/ApiTypes";
import BasePage from "../common/base_page/BasePage";

type Props = {};

type State = {
    isLoading: boolean;
    themes: ThemeType[];
};

class HomePage extends React.PureComponent<Props, State> {
    state: State = {
        isLoading: true,
        themes: []
    };
    async componentDidMount() {
        const themes: ThemeType[] = await api.get("/themes/suggestions");
        this.setState({ themes });
    }

    render() {
        return (
            <BasePage className="HomePage">
                <p>
                    Ez egy webes alkalmazás, ami segít a tanulásban kártyák segítségével. Az alkalmazás lényege, hogy
                    bárki létrehozhat tanulókártyákat kategóriákba szedve, amit a létrehozó fél és az alkalmazás többi
                    felhasználója is szabadon segítségül hívhat tanulása során. Az alkalmazás a jól ismert tanulókártyás
                    módszereken felül pontrendszert alkalmaz a következő kártyák előfordulásának gyakoriságának
                    meghatározására.
                </p>
                <button>Témák</button>
                <button>Új téma létrehozása</button>
                <p>Ajánlott témák: </p>
                {!this.state.isLoading &&
                    this.state.themes.map(theme => (
                        <Link key={theme.id} to={`/temak/${theme.id}`}>
                            {theme.name}
                        </Link>
                    ))}
            </BasePage>
        );
    }
}

export default HomePage;
