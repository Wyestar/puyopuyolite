import { combineReducers } from 'redux';
// import all reducers here
import PuyoReducer from './PuyoReducer';
// movement reducer
// this takes proper action type and returns an object that only changes the puyo
// split this into:
// fallrate
// rotator
// collision detection
// landed status

// play-field reducer
// this only looks at landed/valid puyos and checks for chains. this cascades until there are no chains on the field, recursive reducer?
// this check should be ran after each piece, and auto commence next puyo action
// auto generated puyo is given to puyo in play state

// ondeck puyo => inplay puyo => landed puyo => chainstatus puyo => play-field checks => ondeck puyo is initiated

// next puyo reducer

const rootReducer = PuyoReducer;

export default rootReducer;
