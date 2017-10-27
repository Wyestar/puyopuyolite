// Root

// components
// play-field: landed puyos, chains
// next pieces: shows next two.
// puyopiece component
// score counter

// reducers
// movement: rotator
// movement: vertical, this needs to auto increment decreasing
// play-field: landed puyos
// play-field: chains, cascade
//

// how are pieces fed to the player and the field?
// the pieces need to be auto generated and randomized
// generate all pieces on game initial load?
// generate only three pieces at a time, being the one in play, and the
// next two in the display.

// imports

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PuyoPiece from './PuyoPiece';
import Controls from './Controls';

export default function Root() {
	return (
		<Router>
			<div>
				<Controls />
				<Switch>
					<Route path="/" component={PuyoPiece} />
					<Route component={PuyoPiece} />
				</Switch>
			</div>
		</Router>
	)
}
