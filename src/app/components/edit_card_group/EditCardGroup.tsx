import * as React from "react";
import "./EditCardGroup.scss";
import TextInput from "../common/text_input/TextInput";
import { ChangeEvent, ComponentType } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Button from "../common/button/Button";
import BasePage from "../common/base_page/BasePage";
import { PlusCircleIcon } from "react-line-awesome";
import { api } from "../../../utils/Api";

const get = require("lodash/get");

type CardType = {
    id: number;
    question: string;
    answer: string;
    changed?: boolean;
    added?: boolean;
};

type Props = {} & RouteComponentProps<{ id: string }>;

type State = {
    isLoading: boolean;
    cards: CardType[];
    password: string;
    name: string;
    author: string;
};

class EditCardGroup extends React.PureComponent<Props, State> {
    state: State = {
        isLoading: true,
        cards: [],
        password: "",
        name: "",
        author: ""
    };

    componentDidMount(): void {
        if (get(this.props, "match.params.id", false)) this.queryCards();
    }

    queryCards = () => {
        this.setState({ isLoading: true }, async () => {
            const { data } = await api.get(`card-groups/${this.props.match.params.id}`);
            this.setState({ cards: data.cards, name: data.name, isLoading: false });
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
                 const resp = await api.post(`card-groups`, {
                     cards: cardsToAdd,
                     name: this.state.name,
                     theme:{
                     	id:this.props.match.params.id
                     },
                     secret: this.state.password,
                     author: this.state.author
                 });
                 if(resp.status === 200){
                 	window.location.replace('http://localhost:3000/kategoriak');
                 }
                 await api.patch(`card-groups`, {
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
            <BasePage className="EditCardGroup" type="narrow">
                <TextInput
                    label="Név"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                />
                <TextInput
                    label="Szerző neve"
                    value={this.state.author}
                    onChange={e => this.setState({ author: e.target.value })}
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
                <Button
                    size="small"
                    onClick={() =>
                        this.setState({
                            cards: [
                                ...cards,
                                { id: this.randomInt(-100000000000000, 0), answer: "", question: "", added: true }
                            ]
                        })
                    }
                >
                    <PlusCircleIcon />
                </Button>
                <TextInput
                    label="Jelszó"
                    value={password}
                    type="password"
                    onChange={e => this.setState({ password: e.target.value })}
                />
                <Button onClick={this.saveCards}>Mentés</Button>
            </BasePage>
        );
    }
}

export default withRouter(EditCardGroup as any) as ComponentType;
