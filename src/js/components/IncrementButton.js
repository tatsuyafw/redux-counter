import React, { Component, PropTypes } from 'react';

export default class IncrementButton extends Component {
  render() {
    return(
        <button className="incrementButton" onClick={this.props.onClick}>Increment</button>
    );
  }
}

IncrementButton.propTypes = {
  onClick: PropTypes.func.isRequired
}
