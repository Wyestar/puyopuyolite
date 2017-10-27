// constants are an exported object which includes:

// data structure of potential puyo pieces, 15
// could structure pieces to be:
// [ 0, 0, [left, right, up, down] ]
// or:
// {
//		puyoCenter: {
// 			color: val
// 		},
//		puyoRotate: {
// 			color: val,
// 			position: where
// 		}
//	}
// numbers 1 to 5 correspond to a color
// 1 = red
// 2 = green
// 3 = blue
// 4 = yellow
// 5 = purple
// puyoPieces.p#[1][1] is center and does not change
// puyoPieces.p1[0][1] value can only rotate to puyoPieces.p1[1][2]
// [0][1] => [1][2] top to right, 1
// [1][2] => [2][1] right to bottom, 2
// [2][1] => [1][0] bottom to left, 3
// [1][0] => [0][1] left to top, 4

const puyoPieces2 = {
	p1: [0, 0, 'L'],

	p2: [0, 0, 'L']
}

const puyoPieces = {
	p1: [
				[0,1,0],
				[0,1,0],
				[0,0,0]
			],

	p2: [
				[0,2,0],
				[0,2,0],
				[0,0,0]
			],

	p3: [
				[0,3,0],
				[0,3,0],
				[0,0,0]
			],

	p4: [
				[0,4,0],
				[0,4,0],
				[0,0,0]
			],

	p5: [
				[0,5,0],
				[0,5,0],
				[0,0,0]
			],

	p6: [
				[0,2,0],
				[0,1,0],
				[0,0,0]
			],

	p7: [
				[0,3,0],
				[0,1,0],
				[0,0,0]
			],

	p8: [
				[0,4,0],
				[0,1,0],
				[0,0,0]
			],

	p9: [
				[0,5,0],
				[0,1,0],
				[0,0,0]
			],

	p10: [
				[0,3,0],
				[0,2,0],
				[0,0,0]
			],

	p11: [
				[0,4,0],
				[0,2,0],
				[0,0,0]
			],

	p12: [
				[0,5,0],
				[0,2,0],
				[0,0,0]
			],

	p13: [
				[0,4,0],
				[0,3,0],
				[0,0,0]
			],

	p14: [
				[0,5,0],
				[0,3,0],
				[0,0,0]
			],

	p15: [
				[0,5,0],
				[0,4,0],
				[0,0,0]
			]
}

// play-field is a static sized grid with the same area. lose-state zone is if a landed piece is beyond the top line of the box grid
const field = {
	grid: {},
	chains: [],
	topCheck: booleanflaghere

}
//