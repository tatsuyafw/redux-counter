import React, { Component, PropTypes } from 'react';

export default class DecrementButton extends Component {
  render() {
    return(
        <button className="decrementButton" onClick={this.props.onClick}>Decrement</button>
    );
  }
}

DecrementButton.propTypes = {
  onClick: PropTypes.func.isRequired
}
