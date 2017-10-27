// import reducer stuff

const initialState = {};

const ROTATION = 'ROTATION';
const RIGHT = 'RIGHT';
const LEFT = 'LEFT';

// this action needs to interact with an event listener for the assigned rotate button
// event listener should be on at all times, but where is it initialized?
const rotatePuyo = function() {
	return {
		type: ROTATION

	}
}

const latRight = function(puyo) {
	return {
		type: RIGHT,
		puyo: puyo
	}
}

const latLeft = function(puyo) {
	return {
		type: LEFT,
		puyo: puyo
	}
}

export default function puyoReducer(initialState, action) {
	// reassign objects in each return?
	// append new state to prev state fields?
	// const newState = Object.assign({}, initialState);
	switch (action.type) {
		case ROTATION:
			return Object.assign();
		case RIGHT:
			return Object.assign({}, initialState, {offsetX: initialState.offsetX + 4});
		case LEFT:
			return Object.assign({}, initialState, {offsetX: initialState.offsetX - 4});
		default:
			// newState.y += 1;
			return initialState;
	}
}
