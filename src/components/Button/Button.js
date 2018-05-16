import React, { Component } from "react";
import classnames from "classnames";

export class Button extends Component {

    render() {
        const {
            text,
            isSecondary,
            styleModifier
        } = this.props;

        let btnClass = classnames(
            "c-btn",
            isSecondary && "c-btn--secondary",
            styleModifier && `${styleModifier}`,
        );

        return (
            <button
                className={ btnClass }
                {...this.props}
            >
                {text}
            </button>
        );
    }
}

Button.defaultProps = {
    text: 'Button',
    isSecondary: false
}
