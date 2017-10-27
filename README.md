// puyo puyo project

// can simplify rules by limiting inputs to:
// left movement
// right movement
// rotate, only clockwise. the same puyo is center of rotation, always
// is the top puyo at first
// double rotate? when a column is in between two other columns and a
// rotation is not possible

// puyos always come into the play-field in a column.
// there are only two types of puyo:
// two-piece columns of two colors
// two-piece columns of the same color
// there are five colors

// any consecutive group of four landed puyo's is a chain and is removed from
// play-field. chains do not have to be in straight lines.
// removed chains cause puyo's above it to fall.
// removed chains can cause other puyo's to create valid chains, this can
// cascade until no valid chains are formed.

// win state, high score based, only endurance mode
// lose state, puyo's reach top of play-field
// score system?
// pause functionality?
// reset?
// controls limited to lateral movement and rotate. will add pause and reset functionality at end
// a, d, /
// leftarrow, right arrow, z
