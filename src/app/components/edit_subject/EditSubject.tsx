import * as React from "react";
import "./EditSubject.scss";
import TextInput from "../common/text_input/TextInput";
import mockCardGroup from "../learning/mock/mockCardGroup";
import { ChangeEvent, ComponentType } from "react";
import { withRouter } from "react-router-dom";
import { api } from "../../../utils/Api";
import { CardGroupType } from "../../../types/ApiTypes";

type CardType = {
    id: number;
    question: string;
    answer: string;
    changed?: boolean;
    added?: boolean;
};

type Props = {} & any;

type State = {
    isLoading: boolean;
    cards: CardType[];
    password: string;
    name: string;
};

class EditSubject extends React.PureComponent<Props, State> {
    state: State = {
        isLoading: true,
        cards: [],
        password: "",
        name: ""
    };

    componentDidMount(): void {
        this.queryCards();
    }

    queryCards = () => {
        this.setState({ isLoading: true }, async () => {
            const response: CardGroupType = await api.get(`card-groups/${this.props.match.params.id}`);
            this.setState({ cards: response.cards, name: response.name, isLoading: false });
        });
    };

    saveCards = () => {
        this.setState({ isLoading: true }, async () => {
            const cardsToAdd: CardType[] = [];
            const cardsToUpdate: CardType[] = [];
            this.state.cards.forEach(card => {
                if (card.added) cardsToAdd.push(card);
                if (card.changed) cardsToUpdate.push(card);
            });
            try {
                const responsePost = await api.post(`card-groups/${this.props.match.params.id}`, {
                    cards: cardsToAdd,
                    secret: this.state.password
                });
                const responsePatch = await api.patch(`card-groups/${this.props.match.params.id}`, {
                    cards: cardsToUpdate,
                    secret: this.state.password
                });
            } catch (e) {
                console.log(e);
            }

            this.setState({ isLoading: false });
        });
    };

    fieldProps = (index: number, name: "question" | "answer") => ({
        name,
        value: this.state.cards[index][name],
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
            const cardsClone = [...this.state.cards];
            cardsClone[index][name] = e.target.value;
            cardsClone[index]["changed"] = true;
            this.setState({ cards: cardsClone });
        }
    });

    randomInt = (min: number, max: number) => min + Math.floor((max - min) * Math.random());

    render() {
        const { cards, password } = this.state;
        return (
            <div className="EditSubject">
                <TextInput
                    label="Név"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                />
                {cards.map((card, index) => (
                    <div key={card.id} className="card">
                        <div className="title">{index + 1}. kártya</div>
                        <div className="question-wrapper">
                            <TextInput label="Kérdés" {...this.fieldProps(index, "question")} />
                        </div>
                        <div className="answer-wrapper">
                            <TextInput label="Válasz" {...this.fieldProps(index, "answer")} />
                        </div>
                    </div>
                ))}
                <button
                    onClick={() =>
                        this.setState({
                            cards: [
                                ...cards,
                                { id: this.randomInt(-100000000000000, 0), answer: "", question: "", added: true }
                            ]
                        })
                    }
                >
                    Hozzáad
                </button>
                <TextInput
                    label="Jelszó"
                    value={password}
                    type="password"
                    onChange={e => this.setState({ password: e.target.value })}
                />
                <button onClick={this.saveCards}>Mentés</button>
            </div>
        );
    }
}

export default withRouter(EditSubject as any) as ComponentType;
