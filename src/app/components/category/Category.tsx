import * as React from "react";
import "./Category.scss";
import BasePage from "../common/base_page/BasePage";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { CategoryType, ThemeType } from "../../../types/ApiTypes";
import { PlusCircleIcon } from "react-line-awesome";
import ThemeCard from "../common/cards/theme_card/ThemeCard";
import {api} from "../../../utils/Api";
const get = require("lodash/get");

type Props = {} & RouteComponentProps<{ id: string }>;

type State = {
    isLoading: boolean;
    category: CategoryType | null;
};

class Category extends React.PureComponent<Props, State> {
    state: State = {
        isLoading: true,
        category: null
    };

    async componentDidMount() {
        const category = await api.get(`/categories/${this.props.match.params.id}`);
        this.setState({ category: category.data, isLoading: false });
    }

    render() {
        const { category, isLoading } = this.state;
        return (
            <BasePage className="Category">
                {!isLoading && category && (
                    <>
                        <h1 className="page-title">{category.title}</h1>
                        <div className="page-subtitle">
                            {category.description} Az alábbi témákból választhatsz, és megnézheted az egyes tanulható
                            kártyacsoportot.
                        </div>
                        <div className="themes">
                            {get(category, "themes", []).map((theme: ThemeType) => (
                                <ThemeCard theme={theme} />
                            ))}
                            <div className="theme add">
                                <Link to={`/temak/${this.props.match.params.id}/hozzaadas`}>
                                    <PlusCircleIcon />
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </BasePage>
        );
    }
}

export default withRouter(Category);
