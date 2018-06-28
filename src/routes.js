import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, withRouter, Route, Switch } from 'react-router-dom';
import { Calendar, Day } from './components';
import store, { fetchEvents } from './store';

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return (
      <div></div>
    )
  }
}

const mapState = state => {
  return {
    events: state.events
  }
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(fetchEvents());
    }
  }
};

export default withRouter(connect(mapState, mapDispatch)(Routes));