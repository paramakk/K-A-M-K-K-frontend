import * as React from "react";
import "./ThemeCard.scss";
import { Link } from "react-router-dom";
import { EditIcon, TrashIcon } from "react-line-awesome";
import {ThemeType} from "../../../../../types/ApiTypes";
import mockCategory from "../../../category/mock/mockCategory";

type Props = {
    theme: ThemeType;
};

class ThemeCard extends React.PureComponent<Props> {

    onDeleteTheme = (id: number) => {
        try{
            mockCategory.delete(`/themes/${id}`);
        }catch (e) {
            console.error(e);
        }
    };

    render() {
        const { theme } = this.props;
        return (
            <div className="ThemeCard">
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
        );
    }
}

export default ThemeCard;
