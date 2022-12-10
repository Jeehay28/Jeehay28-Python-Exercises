function solution(board) {
    const n = board.length;
    // create a copy of multi-dimensional array
    let copy = board.map(function (arr) {
        return arr.slice();
    });
    // search the locations of the land mines
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                // find dangerous areas
                let arr = [];
                for (let k = i - 1; k < i + 2; k++) {
                    for (let l = j - 1; l < j + 2; l++) {
                        arr.push([k, l])
                    }
                }
                for (any of arr) {
                    if (any[0] >= 0 && any[0] < n && any[1] >= 0 && any[1] < n) {
                        copy[any[0]][any[1]] = -1
                    }
                }
                // console.log("this is array : ", arr);
            }
        }
    }
    // console.log("this is board", board);
    // console.log("this is copy", copy);
    return copy.flat().filter(x => x === 0).length;
}