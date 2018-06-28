import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { postEvent, reviseEvent, removeEvent } from '../store';

const singleEvent = props => {
  if (props.events.length) let event = props.events[0];

  return event ? (
    <div className="single-event">
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <button type="submit">Revise</button>
      <button type="submit">Delete</button>
    </div>
  ) : null
}
