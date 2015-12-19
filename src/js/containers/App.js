import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import Count from '../components/Count';
import IncrementButton from '../components/IncrementButton';
import DecrementButton from '../components/DecrementButton';

class App extends Component {
  render() {
    const { dispatch, count } = this.props;
    return (
        <div>
        <Count count={count} />
          <IncrementButton onClick={() => {
            dispatch(increment());
          }}/>
          <DecrementButton onClick={() => {
            dispatch(decrement());
          }}/>
        </div>
    );
  }
}

function select(state) {
  return state;
}

export default connect(select)(App);
