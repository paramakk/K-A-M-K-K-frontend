import * as React from "react";
import "./Categories.scss";
import SectionCard from "../common/section_card/SectionCard";
import BasePage from "../common/base_page/BasePage";
import { Link } from "react-router-dom";
import { CategoryType } from "../../../types/ApiTypes";
import mockCategories from "./mock/mockCategories";

type Props = {};

type State = {
    isLoading: boolean;
    categories: CategoryType[];
};

class Categories extends React.PureComponent<Props, State> {
    state: State = {
        isLoading: true,
        categories: []
    };

    async componentDidMount() {
        const categories = await mockCategories.get(`/categories/`);
        this.setState({ categories: categories.data, isLoading: false });
    }

    render() {
        const { categories, isLoading } = this.state;
        return (
            <BasePage className="Categories">
                <h1 className="page-title">Összes kategória</h1>
                <div className="page-subtitle">Fedezd fel a kategóriákat, és kezdj el tanulni a bennük lévő témákból!</div>
                <div className="section-cards">
                {!isLoading &&
                    categories.map(category => (
                        <SectionCard key={category.id} title={category.name}>
                            <div>{category.description}</div>
                            <Link className="link" to={`/kategoriak/${category.id}`}>
                                Tovább a témáihoz
                            </Link>
                        </SectionCard>
                    ))}
                </div>
            </BasePage>
        );
    }
}

export default Categories;
