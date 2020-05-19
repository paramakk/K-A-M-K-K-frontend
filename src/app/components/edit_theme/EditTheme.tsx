import * as React from "react";
import "./EditTheme.scss";
import TextInput from "../common/text_input/TextInput";
import Button from "../common/button/Button";
import BasePage from "../common/base_page/BasePage";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { api } from "../../../utils/Api";
const get = require("lodash/get");

type Props = {} & RouteComponentProps<{ id: string; id2: string }>;

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
       // if (this.props.match.params.id) {
         //   const theme = await api.get(`/themes/${this.props.match.params.id}`);
          //  this.setState({ name: theme.data.name, isLoading: false });
        //} else {
         //   this.setState({ isLoading: false });
        //}
        this.setState({isLoading: false});
    }

    postThemes = () =>{
        this.setState({ isLoading: true }, async () => {
            try {
                 const resp = await api.post("/themes", {
                    title: this.state.name,
    				category:{
    					id:Number(this.props.match.params.id2)
    				}
                 });
                 if(resp.status === 200){
                 	window.location.replace('http://localhost:3000/kategoriak');
                 }
            } catch (e) {
                console.log(e);
            }

            this.setState({ isLoading: false });
        });
    };

    render() {
        const { match } = this.props;
        const { name, isLoading } = this.state;
        return (
            <BasePage className="EditTheme" type="narrow">
                <h1 className="page-title">{get(match, "params.id", null) ? "Téma szerkeztése" : "Téma hozzáadása"}</h1>
                {!isLoading && (
                    <>
                        <TextInput label="Név" value={name} onChange={e => this.setState({ name: e.target.value })} />
                        <Button
                            onClick={() => this.postThemes()
                            }
                        >
                            Mentés
                        </Button>
                    </>
                )}
            </BasePage>
        );
    }
}

export default withRouter(EditTheme);
