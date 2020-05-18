import * as React from "react";
import "./Theme.scss";
import { Link, withRouter } from "react-router-dom";
import { CardGroupType, ThemeType } from "../../../types/ApiTypes";
import BasePage from "../common/base_page/BasePage";
import mockTheme from "./mock/mockTheme";
import { EditIcon, TrashIcon, PlusCircleIcon } from "react-line-awesome";
import mockCategory from "../category/mock/mockCategory";
import mockCardGroup from "../learning/mock/mockCardGroup";
const get = require("lodash/get");

type Props = any;

type State = {
    isLoading: boolean;
    theme: ThemeType | null;
};

class Theme extends React.PureComponent<Props, State> {
    state: State = {
        isLoading: true,
        theme: null
    };

    async componentDidMount() {
        const theme = await mockTheme.get(`/themes/${this.props.match.params.id}`);
        this.setState({ theme: theme.data, isLoading: false });
    }

    onDeleteCardGroup = (id: number) => {
        try{
            mockCardGroup.delete(`/card-groups/${id}`);
        }catch (e) {
            console.error(e);
        }
    };

    render() {
        const { isLoading, theme } = this.state;
        return (
            <BasePage className="Subject">
                {!isLoading && theme && (
                    <>
                        <h1 className="page-title">{theme.name}</h1>
                        <div className="page-subtitle">
                            Ezen az oldalon található a(z) {theme.name} témához tartozó kártyacsoportok. Ezek lehetnek
                            előadásonkként, vagy bármilyen kategóriába szedve. A "tanulás" gombra nyomva kártyánkként
                            tanulható az anyag, amit értékelni lehet 1-től 5-ig tartó skálán.
                        </div>
                        <div className="card-groups">
                            {!this.state.isLoading &&
                                get(this.state, "theme.cardGroups", []).map((cardGroup: CardGroupType) => (
                                    <>
                                        <div className="card-group">
                                            <div className="author">
                                                {theme.author} - {theme.createdAt}
                                            </div>
                                            <Link key={cardGroup.id} className="label" to={`/tanulas/${cardGroup.id}`}>
                                                {cardGroup.name}
                                            </Link>
                                            <div className="card-count">{cardGroup.cards.length} kártya</div>
                                            <div className="delete" onClick={() => this.onDeleteCardGroup(cardGroup.id)}>
                                                <TrashIcon />
                                            </div>
                                            <Link className="edit" to={`/kartya-csoport/${cardGroup.id}/szerkeztes`}>
                                                <EditIcon />
                                            </Link>
                                        </div>
                                    </>
                                ))}
                            <div className="card-group add">
                                <Link to="/kartya-csoport/hozzaadas"><PlusCircleIcon/></Link>
                            </div>
                        </div>
                    </>
                )}
            </BasePage>
        );
    }
}

export default withRouter(Theme);