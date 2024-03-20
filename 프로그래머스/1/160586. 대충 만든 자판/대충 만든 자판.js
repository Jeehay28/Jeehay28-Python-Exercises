function solution(keymap, targets) {
    
    let result = [];
    
    for(let i=0; i<targets.length; i++) { 
        
        let cnt = 0
        let no = false;
        targets[i].split("").map(text => {
            const keyLoc = keymap.map(key => key.indexOf(text));
            if(keyLoc.every(x => x === -1)) {
                no = true;
            } else {
                cnt += Math.min(...keyLoc.filter(x => x >=0)) + 1;
            }
        })
        
        if(no) {
            result[i] = -1
        } else {
            result[i] = cnt;    
        }       
    }

    return result.every(x => x === -1) ? [-1] : result;
    
}