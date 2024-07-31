function solution(park, routes) {
    let row = 0;
    let col = 0;
    
    const maxRow = park.length - 1;
    const maxCol = park[0].length - 1;
    
    // find starting point
    park.map((str, index) => {
        if(str.includes("S")) {
            row = index;
            col = str.indexOf("S");
        }
    })
    
    // walk through the routes 
    const handleRoute = (route) => {
        const arr = route.split(" "); 
        const op = arr[0];
        const n = parseInt(arr[1])
        
        switch(op) {
            case "E": 
                let toEast = true;
                if((col + n) > maxCol) {
                     break;
                } else {
                     for(let i=(col + 1); i<=(col + n); i++) {
                    if(park[row][i] === "X") {
                        toEast = false;
                        break;
                    };
                }
                if(toEast) {
                   col += n;   
                }
                }
               
                 break;
            case "W": 
                let toWest = true;
                if((col - n) < 0) {
                     break;
                } else {
                    for(let i=(col - 1); i>=(col - n); i--) {
                    if(park[row][i] === "X") {
                        toWest = false;
                        break;
                    };
                }
                if(toWest) {
                    col -= n;
                }
                }
                
                 break;
            case "N": 
                let toNorth = true;
                if((row - n) < 0) {
                break;
                    
                } else {
                    for(let i=(row - 1); i>=(row - n); i--) {
                    if(park[i][col] === "X") {
                        toNorth = false;
                        break;
                    };
                }
                if(toNorth) {
                     row -= n;
                }
                }
                
                 break;
            case "S": 
                 let toSouth = true;
                if((row + n) > maxRow) {
                    break;
                } else {
                   
                     for(let i=(row + 1); i<=(row + n); i++) {
                       
                    if(park[i][col] === "X") {
                        toSouth = false;
                        break;
                    };
                }
                if(toSouth) {
                      row += n;
                }
                }
               
                 break;
        }
    }
    
    for(any of routes) {
        handleRoute(any);
    }
    
    return [row, col]
        
}