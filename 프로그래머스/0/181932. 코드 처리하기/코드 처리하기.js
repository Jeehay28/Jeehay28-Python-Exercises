function solution(code) {
    let mode = 0;
    let ret = "";
    
    [...code].map((item, idx) => {
        if(mode === 0) {  
            if(item !== "1") {
                if(idx % 2 === 0) {
                    ret += item;
                }
            } else {
                mode = 1;
            }
            
        } else {
            if(item !== "1") {
                if(idx % 2 === 1) {
                    ret+=item;
                }
            } else {
                mode = 0;
            }
            
        }
    })
    
    return ret.length === 0 ? "EMPTY" : ret;
}