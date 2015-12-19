import React, { Component, PropTypes } from 'react';

export default class Count extends Component {
  render() {
    return (
        <h2 className="count">Count: {this.props.count}</h2>
    );
  }
}

Count.propTypes = {
  count: PropTypes.number.isRequired
};
