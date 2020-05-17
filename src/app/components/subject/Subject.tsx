import * as React from "react";
import "./Subject.scss";
import { FC } from "react";
import { useParams, Link } from "react-router-dom";

type Props = {};

const Subject: FC<Props> = () => {
    const { id } = useParams();
    return (
        <div className="Subject">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <p>Témához tartozó szarok</p>
            <Link to="/tanulas/1">első előadás</Link>
        </div>
    );
};

export default Subject;
