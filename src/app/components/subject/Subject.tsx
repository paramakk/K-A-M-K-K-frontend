import * as React from "react";
import "./Subject.scss";
import { FC } from "react";
import { useParams, Link } from "react-router-dom";

type Props = {};

const Subject: FC<Props> = () => {
    const { id } = useParams();
    return (
        <div className="Subject">
                <Link to="/HomePage" className="button" style={{position: "absolute"}}>Vissza a főoldalra</Link>
                <h1>Téma aloldal</h1><br/>
            <p>
                Ez az oldal a témákhoz tartozó aloldal, itt töltődik be a téma a SubjectID alapján. SubjectID = {id} <br/>
            </p>
            <p>Témához tartozó cuccok:</p>
            <Link to="/tanulas/1">első előadás</Link><br/><br/>
            <div className="row">
                <div className="column">
                    <h1>Témák amik érdekelhetnek:</h1><br/>
                    <Link to="/temak/1">Téma 1</Link><br/>
                    <Link to="/temak/2">Téma 2</Link><br/>
                </div>

                <div className="column">
                    <button>Új téma létrehozása</button>
                </div>
            </div>
        </div>
    );
};

export default Subject;
