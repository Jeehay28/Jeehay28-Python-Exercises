function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    const xRange = [parseInt(- Math.floor(board[0] / 2)), Math.floor(board[0] / 2)];
    const yRange = [parseInt(- Math.floor(board[1] / 2)), Math.floor(board[1] / 2)];
    for (any of keyinput) {
        switch (any) {
            case "left":
                if (x > xRange[0] && x <= xRange[1]) {   
                    x += -1;
                    break;
                } break;
            case "right":
                if (x >= xRange[0] && x < xRange[1]) {
                    x += 1;
                    break;
                } break;
            case "up":
                if (y >= yRange[0] && y < yRange[1]) {
                    y += 1;
                    break;
                } break;
            case "down":
                if (y > yRange[0] && y <= yRange[1]) {
                    y += -1;
                    break;
                } break;
        }
    }
    return [x, y];
}