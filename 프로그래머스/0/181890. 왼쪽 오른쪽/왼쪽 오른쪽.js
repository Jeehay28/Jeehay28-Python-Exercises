function solution(str_list) {
    
    const [l, r] = [str_list.findIndex(item => item==="l"), str_list.findIndex(item => item==="r")];
    
    let index;
    
    if(l >=0 && r>=0) {
        index = Math.min(l, r);
    } else if(l >= 0 && r=== -1) {
        index = l;
    } else if(l === -1 && r >=0) {
        index = r;
    } else {
        return [];
    }
    
    return str_list[index] === "l" ? str_list.slice(0, index) : str_list.slice(index+1)
  
          
}