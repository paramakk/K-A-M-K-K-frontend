import * as React from "react";
import "./Learning.scss";
import mockCardGroup from "./mock/mockCardGroup";
import { withRouter} from "react-router-dom";
import { ComponentType } from "react";
import { Link } from "react-router-dom";

type Props = any;

type QuestionAnswer = {
    id: number;
    question: string;
    answer: string;
};

type State = {
    flipped: boolean;
    finished: number;
    questionAnswers: QuestionAnswer[];
    isLoading: boolean;
};

class Learning extends React.PureComponent<Props, State> {
    state: State = {
        finished: 0,
        flipped: false,
        questionAnswers: [],
        isLoading: true
    };

    componentDidMount(): void {
        this.queryQuestions();
    }

    queryQuestions = () => {
        this.setState({ isLoading: true }, async () => {
            const response = await mockCardGroup.get("card");
            this.setState({ questionAnswers: response.data as QuestionAnswer[], isLoading: false });
        });
    };

    rateOnClick = async (rating: number) => {
        try {
            await mockCardGroup.patch(`card/${this.props.match.params.id}`, { rating });
            this.setState({ flipped: false, finished: this.state.finished === 4 ? 0 : this.state.finished + 1 });
        } catch (e) {
            console.error(e);
        }
    };

    render() {
        const pointsRepresentative = [];
        const ratings = [];
        for (let i = 0; i < this.state.finished; i++)
            pointsRepresentative.push(
                <div className="point" key={i}>
                    pont
                </div>
            );
        for (let i = 1; i <= 5; i++)
            ratings.push(
                <div className="rating" key={i} onClick={() => this.rateOnClick(i)}>
                    {i}
                </div>
            );

        return (
            <div className="Learning">
                <Link to="/HomePage" className="button" style={{position: "absolute"}}>Vissza a főoldalra</Link>
                <Link to="/temak/1" className="button">Vissza a témához</Link>
                <div className="points">{pointsRepresentative}</div>
                <div className="card-wrapper">
                    {!this.state.isLoading && this.state.questionAnswers[this.state.finished] && (
                        <div className="card">
                            <div className="content" onClick={() => this.setState({ flipped: !this.state.flipped })}>
                                {!this.state.flipped ? (
                                    <div className="question">
                                        {this.state.questionAnswers[this.state.finished].question}
                                    </div>
                                ) : (
                                    <div className="answer">
                                        {this.state.questionAnswers[this.state.finished].answer}
                                    </div>
                                )}
                            </div>
                            {this.state.flipped && <div className="ratings">{ratings}</div>}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default withRouter(Learning as any) as ComponentType<{}>;
