import * as React from "react";
import "./EditTheme.scss";
import TextInput from "../common/text_input/TextInput";
import Button from "../common/button/Button";
import BasePage from "../common/base_page/BasePage";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import mockCategory from "../category/mock/mockCategory";
import mockTheme from "../theme/mock/mockTheme";
const get = require("lodash/get");

type Props = {} & RouteComponentProps<{ id: string }>;

type State = {
    name: string;
    isLoading: boolean;
};

class EditTheme extends React.PureComponent<Props, State> {
    state: State = {
        name: "",
        isLoading: true
    };

    async componentDidMount() {
        if (this.props.match.params.id) {
            const theme = await mockTheme.get(`/themes/${this.props.match.params.id}`);
            this.setState({ name: theme.data.name, isLoading: false });
        } else {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { match } = this.props;
        const { name, isLoading } = this.state;
        return (
            <BasePage className="EditTheme" type="narrow">
                <h1 className="page-title">{get(match, "params.id", null) ? "Téma szerkeztése" : "Téma hozzáadása"}</h1>
                {!isLoading && (
                    <>
                        <TextInput label="Név" value={name} onChange={e => this.setState({ name: e.target.value })} />
                        <Button>Mentés</Button>
                    </>
                )}
            </BasePage>
        );
    }
}

export default withRouter(EditTheme);