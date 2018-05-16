import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Card } from "../Card/Card";

export class CardList extends Component {
    render() {
        return (
            <ul className="c-card-list">
                {this.props.listItems.map(function(listItem, index) {
                    return (
                        <Card
                            key={index}
                            styleModifier={listItem.styleModifier}
                            title={listItem.title}
                            description={listItem.description}
                        />
                    );
                })}
            </ul>
        );
    }
}

CardList.defaultProps = {
	listItems: PropTypes.array
}
