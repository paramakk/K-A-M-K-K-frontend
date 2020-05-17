import * as React from "react";
import { ChangeEvent, RefObject } from "react";
import "./TextInput.scss";

const classNames = require("classnames");
const noop = require("lodash/noop");

type Props = {
    value: string | number | null;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: any) => void;
    onBlur?: (e: any) => void;
    placeholder?: string;
    error?: string | null | undefined;
    Icon?: React.ComponentType;
    label?: string;
    setValue?: (value: any) => void;
    required?: boolean;
    className?: string;
    inputWrapperClassName?: string;
    disabled?: boolean;
    maxLength?: number;
    type?: string;
};

class TextInput extends React.PureComponent<Props> {
    textInput: RefObject<HTMLInputElement> = React.createRef();
    render() {
        const {
            label,
            value,
            error = "",
            onKeyDown,
            required,
            type,
            className,
            disabled = false,
            inputWrapperClassName,
            Icon,
            maxLength,
            placeholder = "",
            onBlur,
            onChange
        } = this.props;
        return (
            <div
                className={classNames("TextInput", className)}
                onClick={() => {
                    if (this.textInput.current) this.textInput.current.focus();
                }}
            >
                {!!label && (
                    <div className="label">
                        <span>{label}</span>
                        {required && <span className="required">*</span>}
                    </div>
                )}
                <div className={classNames("input-container", { error: !!error }, { disabled }, inputWrapperClassName)}>
                    {Icon && <span className="input-icon">{React.createElement(Icon)}</span>}

                    <input
                        onChange={!disabled ? e => onChange(e) : noop}
                        onKeyDown={onKeyDown}
                        onBlur={onBlur}
                        ref={this.textInput}
                        placeholder={placeholder}
                        value={value || ""}
                        type={type}
                        disabled={disabled}
                        maxLength={maxLength}
                    />
                </div>
                <div className="error">{error}</div>
            </div>
        );
    }
}

export default TextInput;
