// this puyo piece needs to be exported to almost all components
// a random piece is generated here with a function that makes a copy of a piece from constants

// imports

import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class PuyoPiece extends Component {


	// componentWillMount used to ensure movement/rotation is complete before rerender?
	// keep puyo piece on field component?



	render() {
		const testField = [
			[0,0,0],
			[0,0,0],
			[0,0,0],
			[0,0,0],
			[0,0,0],
		];
		const testMatrix = [
			[0,0],
			[0,0]
		];
		return (
			<div>TEST</div>
		)
	}


}

// lateral state field is left or right
// rotate is bool; piece only rotates clockwise
// const mapStateToProps = function(state) {
// 	return {
// 		playPiece: state.playPiece
// 	}
// }
//
// // may be no need to dispatch from here,
// // all utility operators may be in a separate file
// const mapDispatchToProps = function(dispatch) {
// 	return {
// 		updater: () => {}
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PuyoPiece);
