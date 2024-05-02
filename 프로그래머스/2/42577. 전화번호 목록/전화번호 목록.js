function solution(phone_book) {
    
    const pb = [...phone_book].sort()

    for(let i=0; i<pb.length - 1; i++) {
        const temp = pb[i+1];
        if(temp.startsWith(pb[i])) {
            return false;
        }
    }
    
    return true;
   
} 