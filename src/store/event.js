import axios from 'axios';

//ACTION TYPES
const GET_EVENT = 'GET_EVENT';
const ALL_EVENTS = 'ALL_EVENTS'
const CREATE_EVENT = 'CREATE_EVENT';
const UPDATE_EVENT = 'UPDATE_EVENT';
const DELETE_EVENT = 'DELETE_EVENT';

//ACTION CREATORS
export const getEvent = event => ({ type: GET_EVENT, event });

export const allEvents = events => ({ type: ALL_EVENTS, events });

export const createEvent = createdEvent => ({ type: CREATE_EVENT, createdEvent });

export const updateEvent = updatedEvent => ({ type: UPDATE_EVENT, updatedEvent });

export const deleteEvent = () => ({ type: DELETE_EVENT });

//THUNK CREATORS
export const fetchEvents = () => dispatch =>
  axios.get('/api/events')
    .then(events => dispatch(allEvents(events.data)))
    .catch(err => console.error(`Error: ${err}`));

export const fetchOneEvent = id => dispatch =>
  axios.get(`/api/events/${id}`)
    .then(event => dispatch(getEvent(event.data)))
    .catch(err => console.error(`Error: ${err}`));

export const postEvent = event => dispatch =>
  axios.post(`/api/events`, event)
    .then(createdEvent => dispatch(createEvent(createdEvent.data)))
    .catch(err => console.error(`Error: ${err}`));

export const reviseEvent = (id, info) => dispatch =>
  axios.put(`/api/events/${id}`, info)
    .then(event => dispatch(updateEvent(event.data)))
    .catch(err => console.error(`Error: ${err}`));

export const removeEvent = id => dispatch =>
  axios.delete(`/api/events/${id}`)
    .then(() => dispatch(deleteEvent()))
    .catch(err => console.error(`Error: ${err}`));

//REDUCER
export default (events = [], action) => {
  switch (action.type) {
    case GET_EVENT:
      return action.events;

    case CREATE_EVENT:
      return [...events, action.createdEvent];

    case UPDATE_EVENT:
      return events.map(event => (event.id === event.updatedEvent.id ? action.updatedEvent : event));

    default: return events;
  }
}