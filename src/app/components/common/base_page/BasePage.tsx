import * as React from "react";
import "./BasePage.scss";
import Header from "./components/header/Header";
import { ReactNode } from "react";
const classNames = require("classnames");

type Props = {
    className: string;
    children: ReactNode;
    type?: "normal" | "narrow";
};

class BasePage extends React.PureComponent<Props> {
    render() {
        const { type = "normal", className, children } = this.props;
        return (
            <div className={classNames("BasePage", type)}>
                <Header />
                <div className={classNames("content", className)}>{children}</div>
            </div>
        );
    }
}

export default BasePage;
