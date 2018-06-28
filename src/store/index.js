import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allEvents from './event';
import dayModal from './dayModal';
import calendar from './calendar';



const reducer = combineReducers({ allEvents, dayModal, calendar });


const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    createLogger({ collapsed: true })
  )
);

const store = createStore(reducer, middleware);

export default store;
export * from './event';
export * from './dayModal';
export * from './calendar';