import * as React from "react";
import { FC, memo } from "react";
//
import "./SectionCard.scss";
import { ComponentType } from "react";
const classNames = require("classnames");

type Props = {
    title?: string;
    className?: string;
    children?: any;
};

const SectionCard: FC<Props> = ({ title, className, children }) => (
    <div className={classNames("SectionCard", className)}>
        {title && <div className="title">{title}</div>}
        <div>{children}</div>
    </div>
);

export default memo(SectionCard);
