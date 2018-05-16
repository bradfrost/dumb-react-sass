import React, { Component } from "react";
import classnames from "classnames";

export class Button extends Component {

    render() {
        let btnClass = classnames(
            "c-btn",
            this.props.isSecondary && "c-btn--secondary"
        );

        return (
            <button
                className={ btnClass }
                {...this.props}
            >
                {this.props.text}
            </button>
        );
    }
}

Button.defaultProps = {
    text: 'Button',
    isSecondary: false
}
