// export const flip = (matrix) => {
// 	const H = matrix.length
// 	const W = matrix[0].length
//
// 	let newMatrix = createEmptyMatrix(H, W)
//
// 	times(H, (row) => {
// 		times(W, (column) => {
// 		newMatrix[column][row] = matrix[row][column]
// 	})
// })
// 	return newMatrix
// }
//
// export const mirror = matrix => matrix.map(row => row.reverse())
//
// export const rotateRight = (matrix) => {
// 	return mirror(flip(matrix))
// }
//
// export const rotateLeft = (matrix) => {
// 	return flip(matrix).reverse()
// }

const rotator = function(puyo) {
	if (puyo[2] === 3) {
		puyo[2] = 1;
	}
	else {
		puyo[2] = puyo[2] + 1;
	}

	let satInitialLocation = puyo.satellite.location;
	satInitialLocation++;

	let satColor = puyo.satellite.color;

	// puyo.satellite.color = 0;
	let rotatedPuyo = puyo;
	rotatedPuyo.satellite.location = satInitialLocation;
	rotatedPuyo.satellite.color = satColor;
}