import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Controls extends Component {
	// left() {
	// 	dispatch leftmovement action
	// }
	//
	// right() {
	// 	dispatch rightmovement action
	// }

	render() {
		return (
			<div>
				<button >LEFT</button>
				<button >ROTATE</button>
				<button >RIGHT</button>
			</div>

		)
	}
}

