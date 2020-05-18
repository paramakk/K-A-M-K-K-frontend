import * as React from "react";
import "./Category.scss";
import BasePage from "../common/base_page/BasePage";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { CategoryType, ThemeType } from "../../../types/ApiTypes";
import mockCategory from "./mock/mockCategory";
import { EditIcon, PlusCircleIcon, TrashIcon } from "react-line-awesome";
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
        const category = await mockCategory.get(`/categories/${this.props.match.params.id}`);
        this.setState({ category: category.data, isLoading: false });
    }

    onDeleteTheme = (id: number) => {
        try{
            mockCategory.delete(`/themes/${id}`);
        }catch (e) {
            console.error(e);
        }
    };

    render() {
        const { category, isLoading } = this.state;
        return (
            <BasePage className="Category">
                {!isLoading && category && (
                    <>
                        <h1 className="page-title">{category.name}</h1>
                        <div className="page-subtitle">
                            {category.description} Az alábbi témákból választhatsz, és megnézheted az egyes tanulható
                            kártyacsoportot.
                        </div>
                        <div className="themes">
                            {get(category, "themes", []).map((theme: ThemeType) => (
                                <div className="theme">
                                    <div className="author">
                                        {theme.author} - {theme.createdAt}
                                    </div>
                                    <Link to={`/temak/${theme.id}`}>
                                        <div className="label">{theme.name}</div>
                                    </Link>
                                    <div className="delete" onClick={() => this.onDeleteTheme(theme.id)}>
                                        <TrashIcon />
                                    </div>
                                    <Link className="edit" to={`/temak/${theme.id}/szerkeztes`}>
                                        <EditIcon />
                                    </Link>
                                </div>
                            ))}
                            <div className="theme add">
                                <Link to="/temak/hozzaadas">
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
