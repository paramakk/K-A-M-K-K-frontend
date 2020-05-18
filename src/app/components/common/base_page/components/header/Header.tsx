import * as React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { HomeIcon } from "react-line-awesome";

type Props = {};

class Header extends React.PureComponent<Props> {
    render() {
        return (
            <div className="Header">
                <Link to="/"><HomeIcon /></Link>
                <Link to="/kategoriak">Kategóriák</Link>
            </div>
        );
    }
}

export default Header;
