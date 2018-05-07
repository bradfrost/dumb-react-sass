import React, { Component } from 'react';

export class TextPassage extends Component {
  render() {
    return (
      <div className="c-text-passage">
        { this.props.children }
      </div>
    );
  }
}

