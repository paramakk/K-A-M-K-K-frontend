import * as React from "react";

import "./Button.scss";

const classNames = require("classnames");

export type ButtonProps = {
    children?: any;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    isLoading?: boolean;
    className?: string;
    disabled?: boolean;
    size?: "small" | "normal";
    error?: string;
};

const Button = ({
    className,
    children,
    onClick = () => {},
    isLoading = false,
    disabled = false,
    size = "normal",
    error = "",
}: ButtonProps) => {
    return (
        <React.Fragment>
            {error && <div className="error">{error}</div>}
            <section
                onClick={!isLoading && !disabled ? onClick : () => {}}
                className={classNames(
                    "Button",
                    className,
                    { loading: isLoading },
                    { disabled },
                    size
                )}
            >
                {isLoading ? <img src="/media/icons/loading.gif" alt="loading" className="loading-icon" /> : children}
            </section>
        </React.Fragment>
    );
};

export default Button;
