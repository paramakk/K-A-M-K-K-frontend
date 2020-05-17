import * as React from "react";
import "./Subject.scss";
import { useParams, Link, withRouter } from "react-router-dom";
import { api } from "../../../utils/Api";
import { CardGroupType, ThemeType } from "../../../types/ApiTypes";

type Props = any;

type State = {
    isLoading: boolean;
    cardGroups: CardGroupType[];
};

class Subject extends React.PureComponent<Props, State> {
    state: State = {
        isLoading: true,
        cardGroups: []
    };

    async componentDidMount() {
        const theme: ThemeType = await api.get(`/themes/${this.props.match.params.id}`);
        this.setState({ cardGroups: theme.cardGroups });
    }

    render() {
        return (
            <div className="Subject">
                <Link to="/HomePage" className="button" style={{ position: "absolute" }}>
                    Vissza a főoldalra
                </Link>
                <h1>Téma aloldal</h1>
                <br />
                <p>
                    Ez az oldal a témákhoz tartozó aloldal, itt töltődik be a téma a SubjectID alapján. SubjectID =
                    <br />
                </p>
                <p>Témához tartozó cuccok:</p>
                {!this.state.isLoading &&
                    this.state.cardGroups.map(cardGroup => (
                        <>
                        <Link key={cardGroup.id} to={`/tanulas/${cardGroup.id}`}>
                            {cardGroup.name}
                        </Link>
                            <Link to={`/kartya-csoport/${cardGroup.id}/szerkeztes`}>Szerkeszt</Link>
                        </>
                    ))}
            </div>
        );
    }
}

export default withRouter(Subject);
