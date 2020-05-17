import * as React from "react";
import "./RateNumber.scss";
import { FC } from "react";
import { useParams, Link } from "react-router-dom";

type Props = {};

const RateNumber: FC<Props> = () => {
    const { id } = useParams();
    return (
        <div className="RateNumber">

        </div>
    );
};

export default RateNumber;
