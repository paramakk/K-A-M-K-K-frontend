import * as React from "react";
import "./Subject.scss";
import { useParams, Link, withRouter } from "react-router-dom";
import mockCardGroup from "../learning/mock/mockCardGroup";

type Props = any;

type CardGroupType = { name: string; id: number };

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
        const response = await mockCardGroup.get(this.props.match.params.id);
        this.setState({ cardGroups: (response as unknown) as CardGroupType[] });
    }

    render() {
        return (
            <div className="Subject">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>Témához tartozó szarok</p>
                {!this.state.isLoading &&
                    this.state.cardGroups.map(cardGroup => (
                        <Link key={cardGroup.id} to={`/tanulas/${cardGroup.id}`}>
                            {cardGroup.name}
                        </Link>
                    ))}
            </div>
        );
    }
}

export default withRouter(Subject);
