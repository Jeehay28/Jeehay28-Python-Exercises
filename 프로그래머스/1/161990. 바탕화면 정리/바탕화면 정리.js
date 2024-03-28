function solution(wallpaper) {
    
    let rows = [];
    let cols = [];
    
    wallpaper.forEach((str, index) => {
        
        if(str.includes("#")) {
            rows.push(index);
            cols.push(str.indexOf("#"));
            cols.push(str.lastIndexOf("#"));
            
        }
    })
    
    cols = [... new Set(cols)]
    
    const lux = Math.min(...rows);
    const luy = Math.min(...cols);
    const rdx = Math.max(...rows) + 1;
    const rdy = Math.max(...cols) + 1
    
    return [lux, luy, rdx, rdy];
    
}