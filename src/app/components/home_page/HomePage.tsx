import * as React from "react";
import "./HomePage.scss";
import { ThemeType } from "../../../types/ApiTypes";
import BasePage from "../common/base_page/BasePage";
import mockThemes from "./mock/mockThemes";
import ThemeCard from "../common/cards/theme_card/ThemeCard";

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
        const themes = await mockThemes.get("/themes/suggestions");
        this.setState({ themes: themes.data, isLoading: false });
    }

    render() {
        return (
            <BasePage className="HomePage">
                <p className="details">
                    Ez egy webes alkalmazás, ami segít a tanulásban kártyák segítségével. Az alkalmazás lényege, hogy
                    bárki létrehozhat tanulókártyákat kategóriákba szedve, amit a létrehozó fél és az alkalmazás többi
                    felhasználója is szabadon segítségül hívhat tanulása során. Az alkalmazás a jól ismert tanulókártyás
                    módszereken felül pontrendszert alkalmaz a következő kártyák előfordulásának gyakoriságának
                    meghatározására.
                </p>
                <h2 className="suggestions">Ajánlott témák</h2>
                {!this.state.isLoading && this.state.themes.map(theme => <ThemeCard key={theme.id} theme={theme} />)}
            </BasePage>
        );
    }
}

export default HomePage;
