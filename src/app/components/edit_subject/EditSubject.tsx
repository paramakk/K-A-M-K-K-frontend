import * as React from "react";
import "./EditSubject.scss";
import TextInput from "../common/text_input/TextInput";
import mockCardGroup from "../learning/mock/mockCardGroup";
import { ChangeEvent, ComponentType } from "react";
import { withRouter } from "react-router-dom";

type CardType = {
    id: number;
    question: string;
    answer: string;
};

type Props = {};

type State = {
    isLoading: boolean;
    cards: CardType[];
    password: string;
};

class EditSubject extends React.PureComponent<Props, State> {
    state: State = {
        isLoading: true,
        cards: [],
        password: ""
    };

    componentDidMount(): void {
        this.queryCards();
    }

    queryCards = () => {
        this.setState({ isLoading: true }, async () => {
            const response = await mockCardGroup.get("cardGroup");
            this.setState({ cards: response.data as CardType[], isLoading: false });
        });
    };

    saveCards = () => {
        this.setState({ isLoading: true }, async () => {
            const response = await mockCardGroup.get("card");
            this.setState({ cards: response.data as CardType[], isLoading: false });
        });
    };

    fieldProps = (index: number, name: "question" | "answer") => ({
        name,
        value: this.state.cards[index][name],
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
            const cardsClone = [...this.state.cards];
            cardsClone[index][name] = e.target.value;
            this.setState({ cards: cardsClone });
        }
    });

    randomInt = (min: number, max: number) => min + Math.floor((max - min) * Math.random());

    render() {
        const { cards, password } = this.state;
        return (
            <div className="EditSubject">
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
                            cards: [...cards, { id: this.randomInt(-100000000000000, 0), answer: "", question: "" }]
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
